import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { banner } from "../consants/constants";
import React from "react";

export default function Carousel() {
  return (
    <CCarousel style={{ padding: 40 }}>
      {banner.map((poster) => {
        return (
          <CCarouselItem>
            <CImage className="d-block w-100" src={poster} alt="slide 1" />
          </CCarouselItem>
        );
      })}
    </CCarousel>
  );
}
