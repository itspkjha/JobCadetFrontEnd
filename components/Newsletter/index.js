import SectionHeading from 'components/SectionHeading'
import React from 'react'
import NewsletterForm from './NewsletterForm'
import NewsletterSubscribe from './NewsletterSubscribe'


const Newsletter = () => {
    return (
        <div className="w-full flex justify-center lg:bg-[url('../../public/subscribe-bg.png')]">
            <div className=' w-full  xl:w-[80vw] bg-white lg:m-28 rounded-xl'>
                <div className='flex justify-center'>
                    <div className='flex flex-col md:flex-row  items-center mt-10 mb-10 ml-5 mr-5 gap-5 sm:gap-10 lg:gap-20'>
                        
                        <div className='flex flex-col text-center sm:text-left'>
                            <SectionHeading text="Like our service? Subscribe us" />
                            <p className='text-center sm:text-left'>Let us embark on a journey of a brighter future together </p>
                        </div>
                        <NewsletterSubscribe/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter