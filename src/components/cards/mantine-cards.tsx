import React from 'react'
import { Flex } from '@mantine/core'
import { CardsActivityGoal } from './activity-goal'
import { CardsCalendar } from './calendar'
import { CardsChat } from './chat'

const MantineCards = () => {
  return (
    <Flex gap="lg" py={"xl"} align={"flex-start"}>
      <CardsActivityGoal />
      <CardsCalendar />
      <CardsChat />
    </Flex>
  )
}

export default MantineCards