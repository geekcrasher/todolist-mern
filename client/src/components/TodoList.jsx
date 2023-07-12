import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Task from "./Task";
import Loading from "./Loading";
import Error from "./Error";
import EmptyTask from "./EmptyTask";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../api/apiHandler";

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
    <section className="flex justify-center absolute top-40 xxs:w-9/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mxl:w-11/12 xxl:w-10/12 min-h-fit mx-2">
      <section className="">
        <Task todos={todos} addTodoMutation={addTodoMutation} deleteTodoMutation={deleteTodoMutation} updateTodoMutation={updateTodoMutation}/>
      </section>
      <>
        <Loading isLoading={isLoading} />
        <Error isError={isError} />
        <EmptyTask todos={todos} />
      </>
    </section>
  );
};

export default TodoList;
