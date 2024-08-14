import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const tanzania = () => {
  return (
    <>
      <PrimaryHeader title={'Tanzania'} image={''} />

      <section
        className='my-20 max-w-5xl px-4 xl:px-8 mx-auto'
      >
        <h3 className='text-4xl mb-4 text-primary'>Something something Tanzania with Tazama</h3>
        <p className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore, aperiam impedit aspernatur maxime nulla omnis ullam dicta quidem aliquid dolore rem ad nostrum doloremque vel est. Facilis, repellendus recusandae!
        </p>
      </section>
    </>
  )
}

export default tanzania