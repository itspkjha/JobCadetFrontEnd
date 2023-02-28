import React, { useState } from 'react'
import { Navbar } from 'components/Navbar'
import HeroSection from 'components/HeroSection';
import Footer from 'components/Footer';
import Services from 'components/Services';
import Newsletter from 'components/Newsletter';
import { Toaster } from 'react-hot-toast';

const App = () => {
    
    const [activeNavbarIndex, setActiveNavbarIndex] = useState(-1);
    const handleCallback = (idx) => {
        setActiveNavbarIndex(idx);
    }

    return (
        <div>
            <Toaster/>
            <Navbar activeIdx={activeNavbarIndex} callback={handleCallback}/>
            <HeroSection/>
            <Services/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default App;