import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3080/api' }),
    tagTypes: ["books"],
    endpoints: ((builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ["books"]
        }),
    }))
})

export const { useGetBooksQuery } = baseApi