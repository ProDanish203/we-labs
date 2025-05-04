import { toast, Toaster } from "sonner";
import "./App.css";
import { Card } from "./components/card";
import { type CardData, cardData } from "./lib/data";
import { Navbar } from "./components/sticky-navbar";

const App: React.FC = () => {
  return (
    <main className="bg-gray-100 dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Toaster richColors position="top-right" />
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card: CardData) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              onButtonClick={() => toast.success(`Clicked on ${card.title}`)}
              isNew={card.isNew}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
