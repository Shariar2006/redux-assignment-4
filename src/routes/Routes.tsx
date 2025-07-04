import {
    createBrowserRouter,
} from "react-router-dom";
import App from "@/App";
import AllBooks from "@/pages/AllBooks";
import AddBook from "@/pages/AddBook";
import BorrowSummary from "@/pages/BorrowSummary";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/all-books',
                element: <AllBooks/>
            },
            {
                path: '/add-book',
                element: <AddBook/>
            },
            {
                path: '/borrow-summary',
                element: <BorrowSummary/>
            },
        ]
    },
]);