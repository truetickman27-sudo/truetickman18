"use client";

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ImagePreviewModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledWrapper>
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            ×
          </button>
          <div className="image-container">
            <Image 
              src={imageUrl} 
              alt={title} 
              width={800}
              height={600}
              className="preview-image"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="image-title">
            <h3>{title}</h3>
            <p>Click outside to close</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-out;
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease-out;
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 20px;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #666;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 1001;
  }

  .close-button:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #333;
    transform: scale(1.1);
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    max-height: 70vh;
    overflow: hidden;
    border-radius: 15px;
    background: #f8f8f8;
  }

  .preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .image-title {
    text-align: center;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .image-title h3 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }

  .image-title p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @media (max-width: 768px) {
    .modal-content {
      margin: 20px;
      padding: 15px;
      max-width: calc(100vw - 40px);
    }

    .image-container {
      min-height: 300px;
      max-height: 60vh;
    }

    .close-button {
      top: 10px;
      right: 15px;
      width: 35px;
      height: 35px;
      font-size: 24px;
    }

    .image-title h3 {
      font-size: 16px;
    }

    .image-title p {
      font-size: 12px;
    }
  }
`;

export default ImagePreviewModal;