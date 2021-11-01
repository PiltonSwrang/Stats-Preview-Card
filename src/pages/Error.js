import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <main className="px-8 lg:px-36 py-20 text-center flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-600 to-gray-700 text-white">
            <h1 className="text-6xl font-bold">Error <span className="text-red-500">404</span></h1>
            <p className="text-3xl">Page not found</p>

            <div className="mt-12 border-b-2 border-gray-100 lg:w-1/4 mx-auto pb-4">
                <Link to="/" className="text-2xl text-gray-200 hover:text-gray-50 ">Go back Home</Link>
            </div>
        </main>
    )
}
