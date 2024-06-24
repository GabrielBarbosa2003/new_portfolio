import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { useRef } from 'react';

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

export default function Menu() {

    const menuLinks = [
        { path: "/", label: "Home" },
        { path: "/works", label: "Works" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const tl = useRef();

    function verificaMenu() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }
    gsap.registerPlugin(useGSAP);


    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {y:85})
        tl.current = gsap
        .timeline({paused: true})
        .to(".menu-overlay", {
            duration:1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        })

    })

    useEffect(() => {
        if (isMenuOpen) {
          tl.current.play();
        } else {
          tl.current.reverse();
        }
      }, [isMenuOpen]);
    return (
        <>
            <div className='menu-container'>
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
                                    <Link className="menu-link" to={link.path}>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="https://www.instagram.com/gabriellbarbosa/" target="_blank">Instagram &#8599;</a>
                            <a href="https://www.linkedin.com/in/devgabrielbarbosa/" target="_blank">LinkedIn &#8599;</a>
                        </div>
                        <div className="menu-info-col">
                            <p>gabrieldecarvalhu@gmail.com</p>
                            <p>(19)99483-3584</p>
                        </div>
                    </div>
                </div>
                <div className="menu-preview">
                    <p>PT-BR</p>
                </div>

            </div>





        </>

    )
}
