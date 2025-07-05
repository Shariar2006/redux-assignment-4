import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3080/api' }),
    tagTypes: ["books", "borrow"],
    endpoints: ((builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ["books"]
        }),
        createBorrow: builder.mutation({
            query: (body) => ({
                url: '/borrow',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['books', 'borrow']
        }),
    }))
})

export const { useGetBooksQuery, useCreateBorrowMutation } = baseApi