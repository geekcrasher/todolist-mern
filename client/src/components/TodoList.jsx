import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Tasks from "./Tasks";
import Loading from "./Loading";
import Error from "./Error";
import EmptyTask from "./EmptyTask";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../api/apiHandler";
import TodoListHeader from "./TodoListHeader";

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
   // overflow-y-scroll scrollbar-hide
    <section className="border mb-96 flex justify-center absolute top-32 z-10 xxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mxl:w-10/12 xxl:w-10/12 min-h-[52rem]">
      <section className="w-full relative">
        <TodoListHeader />
        <Tasks todos={todos} addTodoMutation={addTodoMutation} deleteTodoMutation={deleteTodoMutation} updateTodoMutation={updateTodoMutation}/>
      </section>
      <section className=" w-full h-full absolute flex justify-center items-center">
        <Loading isLoading={isLoading} />
        <Error isError={isError} />
        <EmptyTask todos={todos} />
      </section>
    </section>
  );
};

export default TodoList;
