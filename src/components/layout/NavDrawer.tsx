"use client"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Link } from "react-router-dom"
import { Input } from "../ui/input"


export function NavDrawer() {


    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant={"navBtn"} size={"navBtn"}><Menu /></Button>
            </DrawerTrigger>
            <DrawerContent className="space-y-5 px-5 pt-10">
                <div className="">
                    <ul className="space-y-3">
                        <li><Link to={'/all-books'} className="hover:underline">All Books</Link></li>
                        <li>
                            <Link to={'/add-book'} className="hover:underline">Add Book</Link>
                        </li>
                        <li>
                            <Link to={'/borrow-summary'} className="hover:underline">Borrow Summary</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <Input className="w-full mx-auto " type="search" placeholder="Search..." />
                    <Button className="w-full">Search</Button>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
