import React, { useRef } from 'react'
import "./home.css"
import me from '../../assets/img/home/me.jpeg'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';

export default function Home() {
    const heroCopyReveal = useRef();
    const heroImageReveal = useRef();
    const heroTaglineReveal = useRef();


    useGSAP(() => {
        var tl = gsap.timeline()
        heroCopyReveal.current = gsap.timeline({ paused: true }).from("h1", {
            y: 400,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.35,
        })
        heroImageReveal.current = gsap
        .timeline({paused:true})
        .from(".hero-img", {
            y: "1000",
            rotate: -10,
            duration: 1,
            ease: "power3.out",
            delay: 0.75,
        })
        heroTaglineReveal.current = gsap
        .timeline({paused:true})
        .from(".hero-tagline", {
            y: "1000",
            rotate: -10,
            duration: 1,
            ease: "power3.out",
            delay: 0.75,
        })
        heroCopyReveal.current.play();
        heroImageReveal.current.play();
        heroTaglineReveal.current.play();


    }, [])
    return (
        <section className='home-container'>
            <div className='hero-img'>
                <img src={me} alt='myself' />
            </div>

            <div className='hero-copy'>
                <div className='hero-copy-wrapper'>
                    <h1>Gabriel Barbosa</h1>
                </div>
                <div className='hero-copy-wrapper'>
                    <h1>dev front</h1>

                </div>

            </div>
            <div className='hero-tagline'>
                <p>Desenvolvedor baseado no brasil</p>
            </div>


        </section>
    )
}
