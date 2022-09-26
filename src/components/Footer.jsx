import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="Logo" className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new wat to make payment easy, reliable and secure</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((link)=>(
          <div key={link.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium leading-[27px] text-[18px] text-white'>{link.title}</h4>
            <ul className='list-none mt-4'>
              {link.links.map((item,index)=>(
               
                <li key={item.name} className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer
               ${index !==link.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='flex flex-col justify-between items-center w-full md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[15px] text-dimWhite leading-[27px]'>2021 Melditech. All Rights Reserved</p>
      <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index)=>(
                  <img src={social.icon} key={social.id} alt="Social" className={`w-[21px] h-[21px ] object-contain ${index !==socialMedia.length -1 ? 'mr-6':'mr-0'}`} />
                ))}
      </div>
    </div>
  </section>
)
export default Footer
