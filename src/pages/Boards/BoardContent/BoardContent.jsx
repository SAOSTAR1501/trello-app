import { Box } from '@mui/material'
import ListCoLumns from './ListColumns/ListCoLumns'
import { mapOrder } from '../../../utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects, closestCorners } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Cards/Card'
import { cloneDeep } from 'lodash'
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  //Yeu cau chuot di chuyen 10px thi moi kich hoat event, fix click bi goi event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay:250, tolerance: 5 } })
  // const mySensors = useSensors(pointerSensor)
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColums, setOrderedColums] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect(() => {
    setOrderedColums(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  //Tim column theo cardId
  const findColumnByCardId = (cardId) => {
    //Nen dung c.cards thay vi c.cardOrderIds boi vi o buoc handleDargOver chung ta se lam du lieu cho cards hoan chinh truoc roi moi tao ra cardOrderIds moi
    return orderedColums.find(column => column.cards.map(card => card._id)?.includes(cardId))
  }

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)

    //Neu la keo card thi moi thuc hien hanh dong set gia tri oldColumn
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  //Trigger trong qua trinh drag 1 phan tu
  const handleDragOver = (event) => {
    //Khong lam gi neu keo column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    //Xu ly keo card qua cac column
    const { active, over } = event
    if (!active || !over) return

    //active card la card dang duoc keo
    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active

    //over card la card dang tuong tac tren hoac duoi so voi card duoc keo o tren
    const { id: overCardId } = over

    //Tim 2 column theo cardId
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    //khong ton tai 1 trong 2 column
    if (!activeColumn || !overColumn) return

    if (activeColumn ._id !== overColumn._id) {
      setOrderedColums(preColumns => {
        //Tim vi tri (index) cua overcard trong column dich (noi ma active card sap duoc tha)
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

        //Logic tinh toan cardIndex moi (tren hoac duoi cua overCard lay chuan ra tu code cua thu vien)
        let newCardIndex

        const isBelowOverItem =
        active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        //clone mang OrderedColumnsState cu ra 1 cai moi de xu ly data roi return - cap nhat lai OrderedColumnsState moi
        const nextColumns = cloneDeep(preColumns)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        //Column cu
        if (nextActiveColumn) {
          //Xoa card o column active (column cu)
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

          //Cap nhat lai mang cardOrderIds cho chuan du lieu
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        //Column moi
        if (nextOverColumn) {
          //Kiem tra card dang keo co ton tai o overColumn khong neu co thi can xoa no truoc
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

          //Them cai card dang keo vao overColumn theo vi tri index moi
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)

          //Cap nhat lai mang cardOrderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }
        return nextColumns
      })
    }
  }

  //Trigger khi ket thuc hanh dong keo tha 1 phan tu
  const handleDragEnd = (event) => {
    const { active, over } = event
    //Tranh loi khong ton tai vi tri moi
    if (!active || !over) return

    //Xu ly keo tha card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active

      //over card la card dang tuong tac tren hoac duoi so voi card duoc keo o tren
      const { id: overCardId } = over

      //Tim 2 column theo cardId
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      //khong ton tai 1 trong 2 column
      if (!activeColumn || !overColumn) return

      // Phải dùng tới activeDragItemData.columnId hoặc  oldColumnWhenDraggingCard._id (set vào state từ bước handleDragStart) chứ không phải activeData trong scope handleDragEnd vì sau khi đi qua onDragOver tới đây là state của card đã bị cập nhật 1 lần rồi
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        //
      } else {
        // Kéo thả card trong 1 cái column
        //lay vi tri cu từ oldColumnWhenDraggingCard
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)

        // Dung arrayMove vi keo card trong 1 column thi tuong tu voi logic keo column trong 1 boardContent
        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)

        setOrderedColums(prevColumns => {
          //clone mang OrderedColumnsState cu ra 1 cai moi de xu ly data roi return - cap nhat lai OrderedColumnsState moi
          const nextColumns = cloneDeep(prevColumns)

          //TIm toi column dang tha
          const targetColumn = nextColumns.find(column => column._id === overColumn._id)

          //Cap nhat lai 2 gia tri moi la card va cardOrderIds trong cai targetColumn
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)

          //Tra ve gia tri state moi (chuan vi tri)
          return nextColumns
        })
      }
    }

    //Xu ly keo tha column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      //Neu vi tri sau keo tha khac vi tri ban dau
      if (active.id !== over.id) {
      //lay vi tri cu
        const oldColumnIndex = orderedColums.findIndex(c => c._id === active.id)
        const newColumnIndex = orderedColums.findIndex(c => c._id === over.id)

        const dndOrderedColumns = arrayMove(orderedColums, oldColumnIndex, newColumnIndex)
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        setOrderedColums(dndOrderedColumns)
      }
    }

    //Những dữ liệu sau khi kéo thả luôn phải đưa về mặc định null
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDraggingCard(null)

  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      //Thuat toan phat hien va cham
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={mySensors}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#1976d2'),
          width: '100%',
          height: (theme) =>
            theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListCoLumns columns={orderedColums}/>
        <DragOverlay dropAnimation={dropAnimation}>
          {(!activeDragItemType) && null }
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData}/>}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData}/>}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent