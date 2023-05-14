import 'server-only'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

import { CardGrid } from '../components/card'
import { NextDescription } from '../components/next-description'
import { DataProvider } from '../data-providers/data-providers'
import { todoProviders } from '../data-providers/todo-providers'
import { NewTodo } from './new-todo'
import { TodoList } from './todos'
import styles from './todos-page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const TodosPage = ({ provider }: { provider: DataProvider }) => {
  return (
    <main className={styles.main}>
      <NextDescription>
        <div>
          <p>Todolist using data from {todoProviders[provider].name}</p>
          <h2 className={styles.descriptionH2}>
            <Link href="/" className={inter.className}>
              <span>&lt;-</span> Home
            </Link>
          </h2>
        </div>
      </NextDescription>

      <h2 style={{ margin: '40px 0 20px' }}>To do</h2>
      <CardGrid>
        <NewTodo provider={provider} />
        {/* @ts-expect-error Server Component */}
        <TodoList provider={provider} done={false} />
      </CardGrid>

      <h2 style={{ margin: '40px 0 20px' }}>Done</h2>
      <CardGrid>
        {/* @ts-expect-error Server Component */}
        <TodoList provider={provider} done={true} />
      </CardGrid>
    </main>
  )
}