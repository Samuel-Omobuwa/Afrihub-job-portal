import React from 'react'
import HeroImg from '@/public/hero.svg'
import Image from 'next/image'

function Hero() {
  return (
    <div className='pt-[5rem] pb-[3rem]' >
        <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
            <div className='w-[30% mx-auto grid]-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
                {/* Content */}
                <div>
                    <h1 className='text-[20px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e]'>
                        The <span className='text-blue-500'>Easiest Way</span><br /> To Get your New Job
                    </h1>
                </div>

                {/* Image */}
                <div className='hidden lg:block'>
                    <Image src={HeroImg} alt='hero' width={700}  height={400} />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
