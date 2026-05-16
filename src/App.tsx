import { useState } from 'react'

type Task = {
  id: number
  text: string
  done: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  function addTask() {
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks(prev => [...prev, { id: Date.now(), text: trimmed, done: false }])
    setInput('')
  }

  function toggleTask(id: number) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1>Task Board</h1>

      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力..."
        />
        <button onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && (
          <p className="empty">タスクがありません</p>
        )}
        {tasks.map(task => (
          <li key={task.id} className={task.done ? 'task done' : 'task'}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
