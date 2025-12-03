import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className="relative h-screen">
            <div className="absolute bg-darker bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/40 text-white">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                >
                    <source src="/assets/tazama-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="container">
                    <h1 className="absolute left-1/2 top-1/2 mx-auto w-full lg:min-w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-6xl">
                        Your Next Adventure Awaits
                    </h1>

                    <h3 className="font-raleway absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-lg tracking-wide text-white">
                        connect, celebrate & create memories
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Hero