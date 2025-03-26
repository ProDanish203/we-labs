import { ITask } from "../App";
import { TrashIcon, CheckCircle2Icon } from "lucide-react";

interface TaskProps {
  task: ITask;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const Task = ({ task, onToggleComplete, onDeleteTask }: TaskProps) => {
  return (
    <li
      className={`border rounded-lg p-4 transition-all ${
        task.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`mt-1 w-5 h-5 rounded-full flex-shrink-0 ${
              task.completed
                ? "bg-green-500 text-white flex items-center justify-center"
                : "border-2 border-gray-300 hover:border-gray-400"
            }`}
            aria-label={
              task.completed ? "Mark as incomplete" : "Mark as complete"
            }
          >
            {task.completed && (
              <CheckCircle2Icon size={16} className="bg-gr"/>
            )}
          </button>
          <div>
            <h3
              className={`font-medium ${
                task.completed ? "text-gray-500 line-through" : "text-gray-800"
              }`}
              onClick={() => onToggleComplete(task.id)}
            >
              {task.title}
            </h3>
            {task.description && (
              <p
                className={`mt-1 text-sm ${
                  task.completed ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {task.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          aria-label="Delete task"
        >
          <TrashIcon size={16}/>
        </button>
      </div>
    </li>
  );
};
