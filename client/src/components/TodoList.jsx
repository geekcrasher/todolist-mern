import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import Task from "./Task";
import Loading from "./Loading";
import Error from "./Error";
import EmptyTask from "./EmptyTask";

const fetcher = () => {
  return axios.get("/todos");
};

const TodoList = () => {
  const queryClient = useQueryClient();
  const { data: todos, isLoading, isError } = useQuery(["todos"], fetcher);

  return (
    <section>
      <Task todos={todos} />
      <>
        <Loading isLoading={isLoading} />
        <Error isError={isError} />
        <EmptyTask todos={todos} />
      </>
    </section>
  );
};

export default TodoList;
