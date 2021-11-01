import { Link } from 'react-router-dom';
import React from "react";
import { GoThreeBars } from 'react-icons/go';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-4 lg:px-36 py-4  shadow-xl
        bg-gradient-to-r from-gray-600 to-gray-700 text-white">
            <div className="container px-4 mx-auto flex flex-wrap justify-between">
                <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to="/" className="text-xl lg:text-2xl font-semibold tracking-widest uppercase text-white">
                        <div className="flex items-center">
                            <img className="block lg:hidden w-1/5 h-1/5" src="/logo.png" alt="" />
                            <span className="block lg:hidden">HBC</span>
                        </div>
                        <span className="hidden lg:block">HAUSDORFF-BESICOVITCH CAPITAL</span>
                    </Link>
                    <button
                        className="lg:hidden p-2 text-2xl text-white"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <GoThreeBars />
                    </button>
                </div>
                <ul className={"lg:flex " + (navbarOpen ? " flex flex-col text-left w-auto mt-3" : " hidden")}>
                    <Link to="/about" onClick={() => setNavbarOpen(!navbarOpen)} className="mb-2 mr-3 text-lg hover:text-green-500 duration-700">About</Link>
                    <Link to="/careers" onClick={() => setNavbarOpen(!navbarOpen)} className="mb-2 mr-3 text-lg hover:text-green-500 duration-700">Careers</Link>
                    <Link to="/contact" onClick={() => setNavbarOpen(!navbarOpen)} className="mb-2 mr-3 text-lg hover:text-green-500 duration-700">Contact</Link>
                </ul>
            </div>
        </nav>
    );
}