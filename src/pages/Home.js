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

        </main>
    )
}
