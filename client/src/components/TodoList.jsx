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
import CreateTask from "./CreateTask";

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
    <section className="absolute inset-x-40 inset-y-40 w-10/12 h-fit ">
      <section className="grid grid-cols-4 gap-10">
        <CreateTask addTodoMutation={addTodoMutation}/>
        <Task todos={todos} deleteTodoMutation={deleteTodoMutation} updateTodoMutation={updateTodoMutation}/>
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
