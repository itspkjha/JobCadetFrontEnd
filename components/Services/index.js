import SectionHeading from 'components/SectionHeading'
import React from 'react'

const Services = () => {
    return (
        <div className='w-full flex justify-center bg-servicesBgColor -mt-[150px]'>
            <div className=' w-full xl:w-[80vw]'>
                <div className='flex flex-col items-center p-[20px] lg:p-[100px]'>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="text-center mb-20">
                                <SectionHeading text="Boost your career with our Services" />
                                <div class="flex mt-6 justify-center">
                                    <div class="w-16 h-1 rounded-full bg-accentColor  inline-flex"></div>
                                </div>
                            </div>
                            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                {/* Card 1 */}
                                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Tailored Learning for Unique You!</h2>
                                        <p class="leading-relaxed text-base">Our approach is simple - learn according to your needs. Recognizing that every individual is unique, we customize our teaching methods to suit your learning style.</p>
                                    </div>
                                </div>
                                
                                {/* card 2 */}
                                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-500 text-white mb-5 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Stress-Free Path to Success </h2>
                                        <p class="leading-relaxed text-base">Our mentorship and assistance are here to alleviate any tension, allowing you to focus on what matters most. Trust us to guide you towards achieving your goals effortlessly.</p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-400 text-white mb-5 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Unlock Your Potential with Essential Tools</h2>
                                        <p class="leading-relaxed text-base">Our cutting-edge tools empower you to identify and attain what is most necessary for your success. Maximize your potential and achieve your goals with ease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Services
