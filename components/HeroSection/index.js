import React from 'react'
import HeroSectionBanner from 'assets/banner-illustration.png'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className=' w-full xl:w-[80vw]'>
                <div className='flex flex-col text-center items-center justify-center mt-[100px]'>
                    <div className='heading text-[24px] sm:text-[40px] xl:text-[52px] font-semibold text-headingColor leading-normal'>Empowering career success- <br /> achieving dream jobs for students and professionals.</div>
                    <div className='p-[50px]'>
                        <a href="#_" className="inline-flex items-center justify-center w-full sm:h-[60px] px-4 py-3 text-[12px] sm:text-[20px] xl:text-[22px] text-white bg-accentColor rounded-md hover:bg-accentColor sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Learn More 
                        </a>
                    </div>
                    <div className='-translate-y-20'>
                        <Image src={HeroSectionBanner} width={1100} height={300} alt=""></Image>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection