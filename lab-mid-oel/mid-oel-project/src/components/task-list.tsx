import { ITask } from "../App";
import { Task } from "./Task";

interface TaskListProps {
  tasks: ITask[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No tasks yet. Add a task to get started!
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          <p>
            {tasks.filter((t) => t.completed).length} of {tasks.length} tasks
            completed
          </p>
        </div>
      )}
    </div>
  );
};
