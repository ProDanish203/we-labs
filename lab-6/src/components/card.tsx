export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  isNew?: boolean;
}

export const Card = ({
  imageUrl,
  title,
  description,
  buttonText,
  onButtonClick,
  isNew = false,
}: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col h-full">
      {isNew && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          New
        </span>
      )}

      <div className="w-full h-48 relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover max-h-[200px] w-full h-full rounded-t-lg"
        />
      </div>

      <div className="dark:bg-neutral-900 p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-200 mb-4">{description}</p>
        </div>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
