import { Link } from "react-router-dom";
import logo from '@/assets/logo1.png'
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { NavDrawer } from "./NavDrawer";

export default function Navbar() {
  return (
    <nav className="flex md:block justify-between items-center pl-1 pr-3">
      <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center">
        <div>
          <Link to={'/'} className="w-16 h-16"><img src={logo} alt="logo" className="w-16 h-16" /></Link>
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute text-gray-400 mt-2 ml-3" size={21} />
          <Input className="w-full mx-auto pl-12" type="search" placeholder="Search..." />
        </div>
        <div className="space-x-3 lg:space-x-6 text-end hidden md:block">
          <Link to={'/books'} className="font-semibold text-xs lg:text-base hover:underline">All Books</Link>
          <Link to={'/create-book'} className="font-semibold text-xs lg:text-base hover:underline">Add Book</Link>
          <Link to={'/borrow-summary'} className="font-semibold text-xs lg:text-base hover:underline">Borrow Summary</Link>
        </div>
      </div>

      <div
        className="md:hidden block"
      >
        <NavDrawer />

      </div>
    </nav>
  )
}
