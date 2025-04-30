'use client';

import React from 'react';

export default function Modal({
  isModalOpen,
  currentImage,
  closeModal,
  showNext,
  showPrev,
}) {
  if (!isModalOpen || !currentImage) return null; // Don't render the modal if not open

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={closeModal} // Close modal if clicked outside
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing if clicking inside modal
      >
        {/* Image */}
        <img
          src={currentImage}
          alt="Enlarged artwork"
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />

        {/* Close Button (X) */}
        <button
          className="absolute top-2 right-4 text-white text-4xl font-light hover:text-gray-300"
          onClick={closeModal} // Close modal when clicked
        >
          &times;
        </button>

        {/* Previous Arrow */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
          onClick={showPrev} // Go to previous image
        >
          &lt;
        </button>

        {/* Next Arrow */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
          onClick={showNext} // Go to next image
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
