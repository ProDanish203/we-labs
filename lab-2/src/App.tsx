import "./App.css";
import { ClickCounter } from "./components/ClickCounter";
import { HelloWorld } from "./components/HelloWorld";
import { ItemList } from "./components/ItemList";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <main className="py-10 md:px-6 px-4 flex items-center flex-col justify-center min-h-screen container mx-auto">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 w-full">
        {/* Task 1 */}
        <div>
          <p className="font-bold mb-2">Task 1:</p>
          <div className="bg-white p-4 rounded-md shadow-md">
            <HelloWorld />
          </div>
        </div>

        {/* Task 2 */}
        <div>
          <p className="font-bold mb-2">Task 2:</p>
          <div className="bg-white p-4 rounded-md shadow-md">
            <ClickCounter />
          </div>
        </div>

        {/* Task 3 */}
        <div>
          <p className="font-bold mb-2">Task 3:</p>
          <div className="bg-white p-4 rounded-md shadow-md">
            <ItemList />
          </div>
        </div>

        {/* Task 4 */}
        <div>
          <p className="font-bold mb-2">Task 4:</p>
          <div className="bg-white p-4 rounded-md shadow-md">
            <UserForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
