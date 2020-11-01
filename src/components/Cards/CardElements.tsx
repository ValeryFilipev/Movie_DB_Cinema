import React from 'react';
import ContentLoader from 'react-content-loader';

import LazyLoadImage from '../ui/LazyLoadImage';
import { ImageContainer } from '../../styled/Cards/CardElements';

export const MovieImage: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => (
  <ImageContainer>
    <LazyLoadImage
      placeholder={
        <ContentLoader viewBox='0 0 100 150' foregroundColor='#ddd'>
          <rect x='0' y='0' width='100' height='150' />
        </ContentLoader>
      }
      imgSrc={props.src}
    />
  </ImageContainer>
);
