import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import menu from "../../assets/menu.svg"
import Link from "next/link";
import NavItem from "./NavItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MENU_LIST = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "Services",
        href: "/",
    },
    {
        text: "Our Experts",
        href: "/",
    },
    {
        text: "Contact us",
        href: "/",
    },
];

export const ButtonGroup = () => {
    return (    
        <div className="nav__menu-button flex items-center gap-2">
            <a href="#_" className=" flex items-center justify-center w-full px-4 py-3 text-[12px] text-accentColor lg:text-[16px] rounded-md border-accentColor border hover:text-white hover:bg-accentColor sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                Join
            </a>
            <a href="#_" className="inline-flex items-center justify-center w-full px-4 py-3 text-[12px] lg:text-[16px] text-white bg-accentColor rounded-md hover:bg-accentColor sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                Login
            </a>
        </div>
    )
}

export const Navbar = ({ activeIdx, callback }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className='w-full flex justify-center'>
            <div className=' w-full xl:w-[80vw] '>
                <nav className="nav">
                    <Link href="/" className="nav__logo">
                        <Image src={Logo} alt="LOGO" width={165} height={45} />
                    </Link>

                    <div className="nav__menu-list hidden lg:flex">
                        {MENU_LIST.map((menu, idx) => {
                            return (
                                <div key={menu.text} onClick={() => { console.log(activeIdx); callback(idx) }}>
                                    <NavItem active={activeIdx === idx} {...menu} />
                                </div>
                            );
                        })}
                        <ButtonGroup />
                    </div>

                    <div className="nav__menu-bar lg:hidden flex items-center gap-2">
                        <ButtonGroup />
                        <button onClick={toggleDrawer}><Image src={menu} width={20} height={20} alt=""></Image></button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction="top"
                            className="drawer"
                        >
                            <div className="drawer__menu-items">
                                {MENU_LIST.map((menu, idx) => {
                                    return (
                                        <div key={menu.text}>
                                            <NavItem active={activeIdx === idx} {...menu} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Drawer>
                    </div>
                </nav>
            </div>
        </div>

    )
}
