import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import TodoList from "./components/TodoList/TodoList";
import { Route, Router, Routes } from "react-router-dom";

function App() {

  return (
    <main className="min-h-screen w-full relative flex flex-col bg-white">
      <Header />
      <TodoList />
      <Footer />
    </main>
  );
}

export default App;
