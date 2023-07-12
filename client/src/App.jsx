import "./App.css";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList";
import { Route, Router, Routes } from "react-router-dom";

function App() {

   const [isClick, setIsClick] = useState(true)
   const [theme, setTheme] = useState('light')

   useEffect(() => {
      if(theme === "dark") {
         document.documentElement.classList.add("dark")
      }
      else {
         document.documentElement.classList.remove("dark")
      }

   }, [theme])

   const handleClick = () => {
      setIsClick(!isClick)
      setTheme(theme === "dark" ? "light" : "dark")
   }

  return (
    <main className="min-h-screen w-full bg-white dark:bg-main_dark grid place-items-center relative">
      <Navbar onClick={handleClick} isClick={isClick}/>
      <TodoList />
    </main>
  );
}

export default App;
