import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <main className="min-h-screen w-full relative flex flex-col bg-black_pearl">
      <Header />
      <TodoList />
      <Footer />
    </main>
  );
}

export default App;
