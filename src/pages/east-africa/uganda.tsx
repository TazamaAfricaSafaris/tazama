import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const uganda = () => {
    return (
        <>
            <PrimaryHeader title='Uganda' image={'chimps.webp'}/>
            <section
                className='my-20 max-w-6xl px-4 xl:px-8'
            >
                <h3 className='text-4xl lg:text-5xl mb-4 text-primary'>Explore Uganda with Tazama</h3>
            </section>
        </>
    )
}

export default uganda