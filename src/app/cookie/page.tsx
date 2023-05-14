import React from 'react'

import { DataProviders } from '../../data-providers/data-providers'
import { TodosPage } from '../../todos/todos-page'

export default function InMemory() {
  return <TodosPage provider={DataProviders.Cookie} />
}