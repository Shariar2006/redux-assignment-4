import { Link } from "react-router-dom";
import logo from '@/assets/logo1.png'
import { Input } from "../input";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 justify-between items-center px-3">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="relative">
        <Search className="absolute text-gray-400 mt-2 ml-3" size={21} />
        <Input className="w-full mx-auto pl-12" type="search" placeholder="Search..." />
        </div>
        <div className="space-x-6 text-end">
            <Link to={'/all-books'} className="font-semibold hover:underline">All Books</Link>
            <Link to={'/add-book'} className="font-semibold hover:underline">Add Book</Link>
            <Link to={'/borrow-summary'} className="font-semibold hover:underline">Borrow Summary</Link>
        </div>
    </nav>
  )
}
