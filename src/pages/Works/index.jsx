import React, { useEffect, useRef, useState } from 'react'
import './works.css'

import img1 from '../../assets/img/works/img1.jpg'
import img2 from '../../assets/img/works/img2.jpg'
import img3 from '../../assets/img/works/img3.jpg'
import gsap from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules'

export default function Works() {

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

  const [currentSlideId, setCurrentSlideId] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const currentSlide = swiper.slides[currentIndex];
    const currentId = currentSlide.getAttribute('data-id');
    setCurrentSlideId(currentId);
  };

  const imageWorks = {
    0: img1,
    1: img2,
    2: img3
  }

  const updateImages = (imageNumber) => {
    const imgSrc = imageWorks[imageNumber]
    const imgTop = document.createElement("img");
    const imgBottom = document.createElement("img");


    imgTop.src = imageWorks[imageNumber];
    imgBottom.src = imageWorks[imageNumber];
    console.log(imageNumber)

    


    imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgTop.style.transform = "scale(2)";
    imgBottom.style.transform = "scale(2)";

    document.querySelector(".img-top").appendChild(imgTop);
    document.querySelector(".img-bottom").appendChild(imgBottom);

    gsap.to([imgTop, imgBottom], {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      transform: "scale(1)",
      duration: 2,
      ease: "power4.out",
      stagger: 0.15,
      //onComplete: trimExcessImages,
    });
  };


  function trimExcessImages() {
    const selectors = [".img-top", ".img-bottom"];

    selectors.forEach((selector) => {
      const container = document.querySelector(selector);
      const images = Array.from(container.querySelectorAll("img"));
      const excessCount = images.length - 5;

      if (excessCount > 0) {
        images
          .slice(0, excessCount)
          .forEach((image) => container.removeChild(image));
      }
    });
  }



  return (
    <div className='container-slides'>
      <div className='slider' >

        <div className='slide-titles'>
          <Swiper
            navigation={false}
            modules={[Navigation, Grid]}
            slidesPerView={3}
            loop={true}
            spaceBetween={10}
            onSlideChange={(swiper) => {
              handleSlideChange(swiper);
              updateImages(currentSlideId)
            }}
          >

            {titulos.map((titulo, index) => (
              <SwiperSlide key={titulo.id} data-id={titulo.id}>
                <div className={index == currentSlideId ? "title_active" : "title"} >
                  <h1>{titulo.id}</h1>
                </div>
              </SwiperSlide>



            ))}

          </Swiper>

        </div>

      </div>
      <div className='slide-images'>
        <div className='img-top'>
          {/* <img src={imageWorks[currentSlideId]} alt='' /> */}
        </div>

        <div className='img-bottom'>
          {/* <img src={imageWorks[currentSlideId]} alt='' /> */}
        </div>

      </div>

    </div>

  )
}
