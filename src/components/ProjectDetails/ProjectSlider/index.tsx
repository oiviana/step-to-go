
import React from "react";
import { ContentImage } from "@/contentful/contentImage";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import useScreenSize from "@/hooks/useScreenSize";

interface ProjectSliderProps {
  images: ContentImage[] | null;
  mobileImages: ContentImage[] | null;
}

export default function ProjectSlider({ images, mobileImages }: ProjectSliderProps) {

  const deviceType = useScreenSize();

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
      <ImageGallery items={deviceType === 'desktop' ? convertToGalleryItems(images) : convertToGalleryItems(mobileImages)}
        showPlayButton={false} />
    </>
  );
}
