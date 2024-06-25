import React, { useEffect } from 'react'
import './works.css'
import gsap from 'gsap';

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
          atualizaSlideAtivo(currentIndex + 1)
        }, 100)
      },
      x: `-${(currentIndex - 1) * 11.1111}%`,
      duration: 2,
      ease: "power4.out",
    })
  }

  const updateImages = (imageNumber) => {
    const srcImg = `../../assets/img/works/${imageNumber}.jpg`;
    const imgTop = document.createElement("img");
    const imgBottom = document.createElement("img");

    imgTop.src = imgSrc;
    imgBottom.src = imgSrc;


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
      onComplete: trimExcessImages,
    });

  }

  const trimExcessImages = () => {
    const selectors = [".img-top", ".img-bottom"];

    selectors.forEach((selectors) => {
      const container = document.querySelector(selector);
      const images = Array.from(container.querySelectorAll("img"));
      const excessCount = images.length - 5;

      if (excessCount > 0) {
        images
          .slice(0, excessCount)
          .forEach((image) => container.removeChild(image));
      }
    })
  }

  useEffect(() => {
    document.addEventListener("click", handleSlider);

  })
  return (
    <div className='container-slides'>
      <div className='slider' >
        <div className='slide-titles'>
          <div class="title">
            <h1>Neo Forge Towers</h1>
          </div>
          <div class="title"><h1>Arcadian Complex</h1></div>
          <div class="title"><h1>Shadowline Spire</h1></div>
          <div class="title"><h1>Echo Nexus Habitat</h1></div>
          <div class="title"><h1>Cascade Enclave</h1></div>
          <div class="title"><h1>Prism Sector</h1></div>
          <div class="title"><h1>Iron Eden Colony</h1></div>
          <div class="title"><h1>Neo Forge Towers</h1></div>
          <div class="title"><h1>Arcadian Complex</h1></div>
        </div>
        <div className='slide-images'>
          <div className='img-top'></div>
          <div className='img-bottom'></div>

        </div>
      </div>

    </div>

  )
}
