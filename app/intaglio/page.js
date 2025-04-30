'use client';

import { useState } from 'react';
import Modal from '../../components/Modal';

export default function Intaglio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const imageList = [
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/vestige_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/plusdot_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/vibra_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/n%C3%A5got_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/n%C3%A5gra_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/faithblox_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/abstract_figure_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/text_series/text_series_4_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/text_series/text_series_5_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/text_series/text_series_2_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/text_series/text_series_3_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/text_series/text_series_6_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/Artifact_2_resize.jpg",  
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/hexapod_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/visceral_notion_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/vision_1_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/chine_colle/misc/madeleine_dual_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/logical_and/logical_and_chine_1_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/logical_and/logical_and_2_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/fallen/fallen_1_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/star/star_2_resize.jpg",
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/tactus/tactus_1_resize.jpg", 
    "https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/intaglio/tactus/Tactus_blue_resize.jpg", 
  ];

  const handleClick = (src) => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNext = () => {
    const currentIndex = imageList.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentImage(imageList[nextIndex]);
  };

  const showPrev = () => {
    const currentIndex = imageList.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentImage(imageList[prevIndex]);
  };

  return (
    <>
      {imageList.map((src, index) => (
        <div key={index} className="relative group w-full">
          <img
            src={src}
            alt={`Artwork ${index + 1}`}
            className="w-full h-auto object-contain cursor-pointer transition-all duration-300 transform hover:scale-105"
            onClick={() => handleClick(src)}
          />
        </div>
      ))}

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          currentImage={currentImage}
          closeModal={closeModal}
          showNext={showNext}
          showPrev={showPrev}
        />
      )}
    </>
  );
}
