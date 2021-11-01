import React from 'react'

export default function Home() {
    return (
        <main className="px-4 lg:px-36 py-8 lg:py-20 text-center flex flex-col justify-center
        bg-gradient-to-br from-gray-600 to-gray-700
        text-gray-50">
            <h1 className="text-2xl lg:text-4xl font-extrabold uppercase tracking-widest">HAUSDORFF-BESICOVITCH CAPITAL</h1>
            <div className="">
                <img className="w-1/4 h-1/4 mx-auto my-3" src="/logo.png" alt="" />
            </div>

            <p className="text-lg lg:text-xl lg:w-3/4 mx-auto my-6">Our vision is to provide crypto-investment management service to investors from Assam-NER with a focus on stewarding the Assets Under Management (AUM) and responsibly build globally-connected Multi-product investment portfolio through fundamental research based investment framework.
            </p>

            <p className="text-lg lg:text-xl lg:w-3/4 mx-auto my-6">
                To build sustainable generational wealth for our investors by navigating the Distributed Ledger Technology driven cryptocurrency and digital assets space with an approach operating at the intersection of cryptography, game theory, network and behavioral economics, competitive strategy, computer science, investing and portfolio management and become India’s largest digital currency asset manager.
            </p>

            {/* FEATURES  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-8 my-6">
                <div className="px-6 py-10 border-2 border-gray-50 rounded-xl">
                    <div className="">
                        <img className="h-20 mx-auto" src="https://conceptdraw.com/a155c4/p125/preview/640/pict--network-cloud-round-icons-vector-stencils-library" alt="" />
                    </div>
                    <h1 className="text-2xl mb-4 font-bold lg:w-3/4 mx-auto">We're making remote work permanent</h1>
                    <p className="text-lg"> Wow any audience with your Canva presentation. Design, plan, and present all in one place.</p>
                </div>

                <div className="px-6 py-10 border-2 border-gray-50 rounded-xl">
                    <div className="">
                        <img className="h-20 mx-auto" src="https://conceptdraw.com/a155c4/p125/preview/640/pict--network-cloud-round-icons-vector-stencils-library" alt="" />
                    </div>
                    <h1 className="text-2xl mb-4 font-bold lg:w-3/4 mx-auto">We appointed Neil Tran as Chief Financial Officer</h1>
                    <p className="text-lg"> Wow any audience with your Canva presentation. Design, plan, and present all in one place.</p>
                </div>

                <div className="px-6 py-10 border-2 border-gray-50 rounded-xl">
                    <div className="">
                        <img className="h-20 mx-auto" src="https://conceptdraw.com/a155c4/p125/preview/640/pict--network-cloud-round-icons-vector-stencils-library" alt="" />
                    </div>
                    <h1 className="text-2xl mb-4 font-bold lg:w-3/4 mx-auto">We acquired Harper and Partners, Inc.
                    </h1>
                    <p className="text-lg"> Wow any audience with your Canva presentation. Design, plan, and present all in one place.</p>
                </div>
            </div>


        </main>
    )
}
