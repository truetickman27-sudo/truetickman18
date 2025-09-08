"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ImagePreviewModal from './ImagePreviewModal';

interface ProductCardProps {
  image?: string;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  onDownload?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image = "III",
  title,
  price,
  oldPrice,
  discount,
  onDownload
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };
  return (
    <StyledWrapper>
      <div className="card">
        <div className="wrapper">
          <div className="card-image" onClick={handleImageClick}>
            {image.startsWith('http') || image.startsWith('/') ? (
              <Image 
                src={image} 
                alt={title} 
                width={200}
                height={200}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
              />
            ) : (
              image
            )}
            <div className="preview-overlay">
              <span className="preview-text">👁️ Preview</span>
            </div>
          </div>
          <div className="content">
            <p className="title">{title}</p>
            <p className="title price">${price}</p>
            {oldPrice && <p className="title price old-price">${oldPrice}</p>}
            <p />
          </div>
          <button className="card-btn" onClick={onDownload}>DOWNLOAD</button>
        </div>
        {discount && <p className="tag">{discount}</p>}
      </div>
      
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        imageUrl={image.startsWith('http') || image.startsWith('/') ? image : ''}
        title={title}
        onClose={handleClosePreview}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 190px;
    min-width: 160px;
    height: 254px;
    background: #f5f5f5;
    padding: 12px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  
  @media (max-width: 640px) {
    .card {
      width: 100%;
      max-width: 180px;
      height: 240px;
      padding: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .card {
      max-width: 160px;
      height: 220px;
      padding: 8px;
    }
  }
  
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  
  @media (max-width: 640px) {
    .wrapper {
      gap: 6px;
    }
  }
  
  .card-image {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    font-weight: 900;
    transition: all 0.3s;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
  }
  
  @media (max-width: 640px) {
    .card-image {
      height: 140px;
      font-size: 3.5em;
    }
  }
  
  @media (max-width: 480px) {
    .card-image {
      height: 120px;
      font-size: 3em;
    }
  }
  
  .preview-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 5px;
  }
  
  .preview-text {
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    .preview-text {
      font-size: 11px;
    }
  }
  
  .card-image:hover .preview-overlay {
    opacity: 1;
  }
  
  .content {
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    flex-grow: 1;
    min-height: 35px;
  }
  
  @media (max-width: 640px) {
    .content {
      min-height: 30px;
    }
  }
  
  .title {
    font-size: 0.68em;
    text-transform: uppercase;
    font-weight: 500;
    color: #4d4d4d;
    margin: 1px 0;
    line-height: 1.2;
  }
  
  @media (max-width: 640px) {
    .title {
      font-size: 0.65em;
      margin: 1px 0;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 0.62em;
    }
  }
  
  .price {
    font-size: 0.9em;
    font-weight: 700;
    display: inline;
    margin-right: 6px;
  }
  
  @media (max-width: 640px) {
    .price {
      font-size: 0.85em;
      margin-right: 4px;
    }
  }
  
  .old-price {
    font-size: 0.65em;
    text-decoration: line-through;
    color: #adadad;
    display: inline;
  }
  
  @media (max-width: 640px) {
    .old-price {
      font-size: 0.6em;
    }
  }
  
  .card-btn {
    margin-top: auto;
    width: 100%;
    height: 36px;
    background-color: rgb(24, 24, 24);
    border: none;
    border-radius: 40px;
    color: white;
    transition: all 0.3s;
    cursor: pointer;
    font-weight: 500;
    flex-shrink: 0;
    font-size: 12px;
  }
  
  @media (max-width: 640px) {
    .card-btn {
      height: 32px;
      font-size: 11px;
    }
  }
  
  @media (max-width: 480px) {
    .card-btn {
      height: 30px;
      font-size: 10px;
    }
  }
  
  .card:hover .card-image {
    height: 110px;
  }
  
  @media (max-width: 640px) {
    .card:hover .card-image {
      height: 100px;
    }
  }
  
  @media (max-width: 480px) {
    .card:hover .card-image {
      height: 90px;
    }
  }
  
  .card:hover .card-btn {
    margin-top: auto;
  }
  
  .card-btn:hover {
    background-color: greenyellow;
    color: rgb(35, 35, 35);
  }
  
  .card:hover {
    background-color: white;
  }

  .tag {
    position: absolute;
    background-color: greenyellow;
    color: rgb(0, 0, 0);
    left: 8px;
    top: 8px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.7em;
    font-weight: 500;
  }
  
  @media (max-width: 640px) {
    .tag {
      left: 6px;
      top: 6px;
      padding: 3px 6px;
      border-radius: 10px;
      font-size: 0.65em;
    }
  }
  
  @media (max-width: 480px) {
    .tag {
      padding: 2px 5px;
      font-size: 0.6em;
    }
  }
`;

export default ProductCard;