import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="Bill" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute top-0 h-[50%] w-[50%] z-[3] -left-1/2
      rounded-full white__gradient'/>
      <div className='absolute bottom-0 h-[50%] w-[50%] z-[0] -left-1/2
      rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden' /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempore iste quis incidunt voluptates! Nihil id ut est dolore nemo.
        Eius quam id qui illum molestias
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="Apple Store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="Apple Store" className='w-[128px] h-[42px] object-contain cursor-pointer' />

      </div>
    </div>
  </section>
)

export default Billing
