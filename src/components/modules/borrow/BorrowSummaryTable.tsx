import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi"
import type { IBorrowSummaryItem } from "@/types/borrow.interface"

export default function BorrowSummaryTable() {

    const { data, isLoading } = useGetBorrowSummaryQuery(undefined, {
        pollingInterval: 30000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    })

    console.log(data)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <Table>
            <TableCaption>A list of your borrow summary.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Book Title</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead className="text-right">Total Quantity Borrowed</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.data?.map((borrow: IBorrowSummaryItem, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{borrow?.book?.title}</TableCell>
                            <TableCell>{borrow?.book?.isbn}</TableCell>
                            <TableCell className="text-right">{borrow?.totalQuantity}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
