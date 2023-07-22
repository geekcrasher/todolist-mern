import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
   getTasks,
   addTask,
   updateTask,
   deleteTask,
 } from "../../api/apiHandler";
import Tasks from "./Task/Tasks";
import Loading from "../Loading";
import Error from "../Error";
import EmptyTask from "../EmptyTask";
import TodoListHeader from "./Header/TodoListHeader";

const TodoList = () => {
  const queryClient = useQueryClient();

  const { data: todos, isLoading, isError } = useQuery(["todos"], getTasks);

  const addTodoMutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const deleteTodoMutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const updateTodoMutation = useMutation(updateTask, {
   onSuccess: () => {
     queryClient.invalidateQueries(["todos"]);
   },
 });

  return (
    <section className="relative min-h-[42rem] rounded-3xl overflow-hidden w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mt-32 mb-20 mx-auto">
      <section className="px-6 pt-10">
        <TodoListHeader todos={todos}/>
        <Tasks 
            todos={todos} 
            addTodoMutation={addTodoMutation} 
            deleteTodoMutation={deleteTodoMutation} 
            updateTodoMutation={updateTodoMutation}
        />
      </section>
      <section className="w-full">
        <Loading isLoading={isLoading} />
        <Error isError={isError} />
        <EmptyTask todos={todos} />
      </section>
    </section>
  );
};

export default TodoList;
