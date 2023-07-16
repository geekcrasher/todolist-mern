import "./App.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen w-full relative flex justify-center">
      <Navbar />
      <TodoList />
      <Footer />
    </main>
  );
}

export default App;
