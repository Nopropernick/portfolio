import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50'/>
        </div>
        <div className='fex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how can I help you achive your goals.</p>
            <a href="https://drive.google.com/file/d/1ayCLsLM08YfSQ_b-MzD7VKvj_PZCLeQF/view?usp=sharing">
            <MagicButton title={'Lets get in touch'} icon={<FaLocationArrow/>} position={'right'}/>
        </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2024 Abhinav Singh
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt='' width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
       
    </footer>
  )
}

export default Footer