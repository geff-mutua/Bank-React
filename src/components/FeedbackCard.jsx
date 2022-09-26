import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content, name,title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <img src={quotes} alt="Quotes" className='w-[42px] h-[27px]' />
        <p className='font-normal font-poppins text-white text-[18px] leading-[32px] my-10'>{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="profile" className='w-[48px] h-[48px] rounded-full' />
            <div className='ml-4 flex flex-col'>
                <h4 className='font-poppins font-semibold text-[18px] leading-[32px] text-white'>{name}</h4>
                <p className='font-poppins font-normal text-[12px] leading-[24px] text-dimWhite'>{title}</p>
            </div>

        </div>
    </div>
)

export default FeedbackCard