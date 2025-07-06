import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const server = 'https://book-library-manegement.vercel.app/api'
// const server = 'http://localhost:3080/api'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: server }),
    tagTypes: ["books", "borrow"],
    endpoints: ((builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ["books"]
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["books"]
        }),
        getBorrowSummary: builder.query({
            query: () => '/borrow',
            providesTags: ["borrow"]
        }),
        createBorrow: builder.mutation({
            query: (body) => ({
                url: '/borrow',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['books', 'borrow']
        }),
        createBook: builder.mutation({
            query: (body) => ({
                url: '/books',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['books']
        }),
        updateBook: builder.mutation({
            query: ({ id, body }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['books']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books']
        }),
    }))
})

export const { useGetBooksQuery, useGetSingleBookQuery, useCreateBorrowMutation, useGetBorrowSummaryQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation } = baseApi