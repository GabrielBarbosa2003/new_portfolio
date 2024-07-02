import React, { useEffect, useRef, useState } from 'react'
import './works.css'

import img1 from '../../assets/img/works/img1.jpg'
import img2 from '../../assets/img/works/img2.jpg'
import img3 from '../../assets/img/works/img3.jpg'
import img4 from '../../assets/img/works/img4.jpg'
import img5 from '../../assets/img/works/img5.jpg'
import img6 from '../../assets/img/works/img6.jpg'
import img7 from '../../assets/img/works/img7.jpg'
import img8 from '../../assets/img/works/img8.jpg'
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
    { title: "Cascade Enclave", id: 8 }
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
    2: img3,
    3: img4,
    4: img5,
    5: img6,
    6: img7,
    7: img8

  }

  const [refTop, setRefTop] = useState(null)
  const [refBot, setRefBot] = useState(null)

  const imgRefTop = useRef(0);
  const imgRefBot = useRef(0);


  const updateImages = (imageNumber) => {

    const imgSrc = imageWorks[currentSlideId]
    const imgTop = document.createElement("img");
    const imgBottom = document.createElement("img");


    // imgRefTop.current.src = imageWorks[imageNumber];
    // imgRefBot.current.src = imageWorks[imageNumber];
    imgTop.src = imgSrc;
    imgBottom.src = imgSrc;






    imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgTop.style.transform = "scale(2)";
    imgBottom.style.transform = "scale(2)";

    if (imgRefTop.current) {
      imgRefTop.current.innerHTML = '';
      imgRefBot.current.innerHTML = '';

    }


    document.querySelector(".img-top").appendChild(imgTop);
    document.querySelector(".img-bottom").appendChild(imgBottom);

    console.log(imgRefTop.current)

    // imgRefTop.current.appendChild(imgTop);
    // imgBottom.current.appendChild(imgBottom);

    setRefTop(imgTop);
    setRefBot(imgBottom);


    gsap.to([imgTop, imgBottom], {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      transform: "scale(1)",
      duration: 2,
      ease: "power4.out",
      stagger: 0.15,
      //onComplete: trimExcessImages,
    });

  }








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
                  <h1>{titulo.title}</h1>
                </div>
              </SwiperSlide>



            ))}

          </Swiper>

        </div>

        <div className='slide-images'>
          <div className='img-top' ref={imgRefTop} >

          </div>

          <div className='img-bottom' ref={imgRefBot}>

          </div>

        </div>

      </div>


    </div>

  )
}
