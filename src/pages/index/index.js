import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductsContainer from '../../components/products-container';

function Index() {
  return (
    
    <>
    <div className="container"></div>
     <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: true,
          drag: 'free',
          gap: '5rem',
          type: 'loop',
          height: "500px"
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_1.jpg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_2.jpg" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_3.jpg" alt="Image 2"/>
        </SplideSlide>
      </Splide>
      <ProductsContainer/>
    </>
    
  )
}

export default Index
