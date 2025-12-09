import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersapi = createApi({
    // Unique name for API slice in Redux store
    reducerPath: 'usersapi',
    // Base URL for all API calls
    baseQuery: fetchBaseQuery({
        baseUrl: `https://jsonplaceholder.typicode.com/`
    }),
    // API endpoints (functions to fetch data)
    endpoints: (builder) => ({
        // GET: https://jsonplaceholder.typicode.com/users
        getUsers: builder.query({
            query: () => 'users'
        }),
        getPosts: builder.query({
            query: () => 'posts'
        }),
        getTodos: builder.query({
            query:()=>'todos'
        })
    })
})

export const { useGetUsersQuery, useGetPostsQuery, useGetTodosQuery } = usersapi;
// Auto-generated React hooks for API calls