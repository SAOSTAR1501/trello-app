import { Box } from '@mui/material'
import ListCoLumns from './ListColumns/ListCoLumns'
import { mapOrder } from '../../../utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  //Yeu cau chuot di chuyen 10px thi moi kich hoat event, fix click bi goi event
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay:250, tolerance: 5 } })
  // const mySensors = useSensors(pointerSensor)
  const mySensors = useSensors(mouseSensor, touchSensor)


  const [orderedColums, setOrderedColums] = useState([])

  useEffect(() => {
    setOrderedColums(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])
  const handleDragEnd = (event) => {
    const { active, over } = event
    //Tranh loi khong ton tai vi tri moi
    if (!over) return

    if (active.id !== over.id) {
      //lay vi tri cu
      const oldIndex = orderedColums.findIndex(c => c._id === active.id)
      const newIndex = orderedColums.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColums, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      setOrderedColums(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
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
      </Box>
    </DndContext>
  )
}

export default BoardContent