import React from 'react'
import { Link } from 'react-router-dom';
import { states } from './.././../data/states'
import { countries } from './.././../data/countries'

export default function index() {
    return (
        <main className="px-4 lg:px-36 py-8 lg:py-20 flex flex-col justify-center
        bg-gradient-to-br from-gray-600 to-gray-700
        ">
            <h1 className="text-4xl font-bold uppercase tracking-widest border-b-2 border-gray-400 pb-4 lg:w-1/2 mx-auto text-center text-white">Contact</h1>

            <div className="text-lg my-4 lg:my-8 lg:w-2/4 mx-auto pb-10 lg:pb-0">
                <form action="" className="grid grid-cols-2 gap-5">
                    <label htmlFor="cars" className="col-span-2 text-white text-xl">Name  </label>

                    <input type="text" placeholder="First Name"
                        className="bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring focus:bg-white  focus:border-blue-300 py-2 px-4 rounded-lg shadow-lg" />
                    <input type="text" placeholder="Last Name"
                        className="bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring focus:bg-white  focus:border-blue-300 py-2 px-4 rounded-lg shadow-lg" />

                    <div className="flex flex-col">
                        <label htmlFor="cars" className="mb-4 text-white text-xl">Country  </label>
                        <select id="cars" name="carlist" form="carform"
                            className="bg-gray-100 py-2 px-4 rounded-lg shadow-lg focus:ring">
                            {countries.map((data, idx) => {
                                return <option value={data.name} key={idx}>{data.name}</option>
                            })}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="cars" className="mb-4 text-white text-xl">State :  </label>
                        <select id="cars" name="carlist" form="carform"
                            className="bg-gray-100 py-2 px-4 rounded-lg shadow-lg">
                            {states.map((data, idx) => {
                                return <option value={data.state} key={idx}>{data.state}</option>
                            })}
                        </select>
                    </div>
                    <h1 className="text-white text-xl">Email Address</h1>
                    <input type="text" placeholder="Email Address"
                        className="bg-gray-100 border-2 border-gray-200 focus:outline-none 
                        focus:bg-white focus:ring focus:border-blue-300 col-span-2 py-2 px-4 rounded-lg shadow-lg" />

                    <h1 className="text-white text-xl">Company/Organization</h1>
                    <input type="text" placeholder="Company/Organization"
                        className="bg-gray-100 border-2 border-gray-200 focus:outline-none focus:ring focus:bg-white  focus:border-blue-300 col-span-2 py-2 px-4 rounded-lg shadow-lg" />

                    <h1 className="text-white text-xl">Message</h1>
                    <textarea type="text" placeholder="Message" rows="5"
                        className="focus:outline-none bg-gray-100 focus:bg-white  focus:ring focus:border-blue-300 col-span-2 py-2 px-4 rounded-lg shadow-lg resize-none" />


                    <Link to="#!" type="button" className="text-center pb-3 py-2 px-4 rounded-xl text-white text-2xl lg:w-1/2 bg-gradient-to-r from-indigo-400 to-purple-300
                    hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-300
                    ">submit</Link>
                </form>
            </div>
        </main>
    )
}
