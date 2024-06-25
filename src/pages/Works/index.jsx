import React, { useEffect, useRef } from 'react'
import './works.css'
import gsap from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules'

export default function Works() {

  var currentIndex = 1;
  var totalSlides = 7;

  const atualizaSlideAtivo = () => {
    document.querySelectorAll(".title").forEach((el, index) => {
      if (index === currentIndex) {
        el.classList.add("active")
      } else {
        el.classList.remove("active")
      }
    })

  }
  const handleSlider = () => {
    if (currentIndex < totalSlides) {
      currentIndex++;
    } else {
      currentIndex = 1;
    }

    gsap.to(".slide-titles", {
      onStart: () => {
        setTimeout(() => {
          atualizaSlideAtivo();
        }, 100);

        updateImages(currentIndex + 1);
      },
      x: `-${(currentIndex - 1) * 11.1111}%`,
      duration: 2,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    //document.addEventListener("click", handleSlider);

    //updateImages(2);
    atualizaSlideAtivo();
  })

  const titulos = [
    { title: "Arcadian Complex", id: 1 },
    { title: "Shadowline Spire", id: 2 },
    { title: "Echo Nexus Habitat", id: 3 },
    { title: "Cascade Enclave", id: 4 },
    { title: "Arcadian Complex", id: 5 },
    { title: "Shadowline Spire", id: 6 },
    { title: "Echo Nexus Habitat", id: 7 },
    { title: "Cascade Enclave", id: 8 },
    { title: "Echo Nexus Habitat", id: 9 }
  ]


  return (
    <div className='container-slides'>
      <div className='slider' >

        <div className='slide-titles'>
          <Swiper
            navigation={false}
            modules={[Navigation, Grid]}
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            className="image"
            >


            {titulos.map((titulo) => (
              <SwiperSlide key={titulo.id}>
                <div className="title">

                  <h1>{titulo.title}</h1>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
        <div className='slide-images'>
          <div className='img-top'></div>
          <div className='img-bottom'></div>

        </div>
      </div>

    </div>

  )
}
