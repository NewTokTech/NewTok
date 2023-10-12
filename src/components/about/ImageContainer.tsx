import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

const ImageContainer = () => {
    const images = [
        "/about/image1.svg",
        "/about/image2.svg",
        "/about/image3.svg",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          // Calculate the next index with wrapping
          const nextIndex = (currentIndex + 1) % images.length;
          setCurrentIndex(nextIndex);
        }, 3000); // Change image every 3 seconds (adjust as needed)
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);
    
      // Create a spring for image opacity
      const imageSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
      });
  return (
    <>
        <div className="md:5/12 lg:w-5/12">
              <animated.div
                key={currentIndex}
                style={{
                  ...imageSpring,
                }}
              >
                <Image
                  src={images[currentIndex]}
                  alt="image"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </animated.div>
            </div>
    </>
  )
}

export default ImageContainer