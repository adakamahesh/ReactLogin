import React from "react";
import { useGetUsersQuery, useGetPostsQuery, useGetTodosQuery } from "./users";

function users() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const { data: posts } = useGetPostsQuery();
  const {data:todos} = useGetTodosQuery();

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading data</h3>;
  return (
    <>
      <div>
        <h2>users</h2>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>posts</h2>
        {posts.map((posts) => (
          <div key={posts.id}>
            <p>{posts.title}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>todos</h2>
        {todos.map((todos)=>(
          <div key={todos.id}>
            <p>{todos.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default users;
