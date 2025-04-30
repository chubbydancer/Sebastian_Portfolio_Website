'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const openModal = (image, images) => {
    setCurrentImage(image);
    setImageList(images);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    setImageList([]);
  };

  const showNext = () => {
    if (!currentImage || imageList.length === 0) return;
    const currentIndex = imageList.findIndex((img) => img.src === currentImage.src);
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentImage(imageList[nextIndex]);
  };

  const showPrev = () => {
    if (!currentImage || imageList.length === 0) return;
    const currentIndex = imageList.findIndex((img) => img.src === currentImage.src);
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentImage(imageList[prevIndex]);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        currentImage,
        imageList,
        openModal,
        closeModal,
        showNext,
        showPrev,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
