import {
    createBrowserRouter,
} from "react-router-dom";
import App from "@/App";
import AllBooks from "@/pages/AllBooks";
import AddBook from "@/pages/AddBook";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import Borrow from "@/pages/Borrow";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/books',
                element: <AllBooks/>
            },
            {
                path: '/books/:id',
                element: <BookDetails/>
            },
            {
                path: '/edit-book/:id',
                element: <EditBook/>
            },
            {
                path: '/create-book',
                element: <AddBook/>
            },
            {
                path: '/borrow-summary',
                element: <BorrowSummary/>
            },
            {
                path: '/borrow/:id',
                element: <Borrow/>
            },
        ]
    },
]);