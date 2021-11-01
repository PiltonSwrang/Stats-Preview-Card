import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer className="
        bg-gradient-to-r from-gray-700 to-gray-800
        px-8 lg:px-36 py-10 relative w-screen bottom-0 text-white text-center h-100 ">
            <div className="flex justify-between lg:w-1/2 mx-auto mb-4">
                <Link to="/privacy-policy" className="text-sm lg:text-md uppercase tracking-widest hover:bg-gray-50 hover:text-green-500">Privacy Policy</Link>
                <Link to="/terms-of-use" className="text-sm lg:text-md uppercase tracking-widest hover:bg-gray-50 hover:text-green-500">Terms of use</Link>
            </div>
            <p className="text-sm tracking-tight">Copyright &copy; {getYear()} BlockTower LLC. All rights reserved. </p>
        </footer>
    )
}
