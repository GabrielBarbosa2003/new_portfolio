import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { useRef } from 'react';

export default function Menu() {

    const menuLinks = [
        { path: "/", label: "Home" },
        { path: "/works", label: "Works" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" }
    ];

    const container = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function verificaMenu() {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <div className='menu-container' ref={container}>
                <div className='logo'>
                    <Link to="/">Desenvolvedor</Link>
                </div>
                <div className='rigth-menu'>
                    <div className='contact'>
                        <div className='btn'>
                            <Link to="/">Contato</Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='btn' onClick={verificaMenu}>
                            Menu
                        </div>
                    </div>
                </div>
            </div>



            <div className='menu-overlay'>
                <div className='menu-overlay-bar'>
                    <div className='menu-logo'>
                        <Link to='/'>Desenvolvedor</Link>
                    </div>
                    <div className='menu-close'>
                        <p onClick={verificaMenu}>close</p>
                    </div>

                </div>

                <div className="menu-close-icon" onClick={verificaMenu}>
                    <p>X</p>
                </div>


                <div className='menu-copy'>
                    <div className='menu-links'>
                        {menuLinks.map((link, index) => (
                            <div key={index} className="menu-link-item">
                                <div className="menu-link-item-holder" onClick={verificaMenu}>
                                    <Link className="menu-link" href={link.path}>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="#">X &#8599;</a>
                            <a href="#">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                            <a href="#">Behance &#8599;</a>
                            <a href="#">Dribbble &#8599;</a>
                        </div>
                        <div className="menu-info-col">
                            <p>info@codegrid.com</p>
                            <p>0923 3984 23</p>
                        </div>
                    </div>
                </div>
                <div className="menu-preview">
                    <p>View ShowReel</p>
                </div>

            </div >





        </>

    )
}
