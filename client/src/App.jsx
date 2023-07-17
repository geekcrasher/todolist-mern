import "./App.css";
import Footer from "./components/Footer";
import Header from './components/Header'
import TodoList from "./components/TodoList";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen w-full relative flex flex-col">
      <Header />
      <TodoList />
      <Footer />
    </main>
  );
}

export default App;
