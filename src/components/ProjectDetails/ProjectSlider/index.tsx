"use client";
import React from "react";
import { ContentImage } from "@/contentful/contentImage";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

interface ProjectSliderProps {
  images: ContentImage[] | null;
  mobileImages: ContentImage[] | null;
}

export default function ProjectSlider({ images, mobileImages }: ProjectSliderProps) {
  const convertToGalleryItems = (imageList: ContentImage[] | null): ReactImageGalleryItem[] => {
    if (!imageList) return [];
  
    return imageList.map(image => ({
      original: image.src,
      originalAlt: image.alt,
      thumbnail: image.src,  
      originalTitle: image.alt,
    
    }));
  };


  return (
    <>
    <ImageGallery items={convertToGalleryItems(images)}
    showPlayButton={false}/>;
    </>
  );
}
