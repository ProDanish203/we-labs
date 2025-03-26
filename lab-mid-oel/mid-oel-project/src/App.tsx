import { useState } from "react";
import { TaskList } from "./components/task-list";
import { TaskInput } from "./components/task-input";

export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (title: string, description: string) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-4 container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Task Management App
        </h1>

        <TaskInput onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
