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
   // overflow-y-scroll scrollbar-hide absolute top-32 z-10 flex justify-center
   // w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mxl:w-10/12 xxl:w-10/12 h-fit
    <section className=" w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mxl:w-10/12 xxl:w-10/12 mt-32 mb-20 mx-auto h-fit">
      {/* w-full relative*/}
      <section className=" ">
        <TodoListHeader />
        <Tasks todos={todos} addTodoMutation={addTodoMutation} deleteTodoMutation={deleteTodoMutation} updateTodoMutation={updateTodoMutation}/>
      </section>
      {/* absolute flex justify-center items-center*/}
      <section className="  ">
        <Loading isLoading={isLoading} />
        <Error isError={isError} />
        <EmptyTask todos={todos} />
      </section>
    </section>
  );
};

export default TodoList;
