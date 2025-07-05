import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo3.png'
import { RiInstagramFill } from 'react-icons/ri'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Footer() {
    return (
        <footer className="bg-primary text-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className='space-y-3'>
                    {/* <div className="flex items-center gap-2 mb-3"> */}
                    <img src={logo} alt="Library Logo" className="w-24" />
                    {/* </div> */}
                    <p className="text-sm text-gray-100">
                        We are committed to empowering minds through knowledge. Explore a wide range of books and genres in our digital library.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-100">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="all-books" className="hover:text-white">All Books</Link></li>
                        <li><Link to="add-book" className="hover:text-white">Add Book</Link></li>
                        <li><Link to="borrow-summary" className="hover:text-white">Borrow Summary</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm text-gray-100">123 Library Road<br />Dhaka, Bangladesh</p>
                    <p className="text-sm text-gray-100 mt-2">Email: support@library.com</p>
                    <p className="text-sm text-gray-100">Phone: +880 123-456789</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><IoLogoLinkedin /></a>
                        <a href="#" className="hover:text-white"><FaFacebookSquare /></a>
                        <a href="#" className="hover:text-white"><RiInstagramFill /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center text-sm text-gray-100 py-4">
                © {new Date().getFullYear()} Readify. All rights reserved.
            </div>
        </footer>

    )
}
