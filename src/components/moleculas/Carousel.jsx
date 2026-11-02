import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselData } from "../../utils/dataCarousel";

/**
 * Carrusel de tarjetas apiladas (Swiper con efecto "cards").
 * Se desliza con el dedo, el mouse, las flechas o el teclado.
 *  - slides: lista de tarjetas; por defecto usa CarouselData (utils/dataCarousel.jsx)
 */
export function Carousel({ slides = CarouselData }) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCards]}
        effect="cards"
        grabCursor={true}
        navigation={true}
        pagination={{ type: "fraction" }}
        a11y={{
          prevSlideMessage: "Tarjeta anterior",
          nextSlideMessage: "Tarjeta siguiente",
          firstSlideMessage: "Es la primera tarjeta",
          lastSlideMessage: "Es la última tarjeta",
        }}
      >
        {slides.map(({ titulo, descripcion, icono: Ico, colores }) => (
          <SwiperSlide
            key={titulo}
            style={{
              background: `linear-gradient(160deg, ${colores[0]}, ${colores[1]})`,
            }}
          >
            <span className="icono">
              <Ico />
            </span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  width: min(260px, 70vw);
  padding: 16px 0;

  --swiper-navigation-color: #ffffff;
  --swiper-navigation-size: 22px;
  --swiper-pagination-color: #ffffff;

  .swiper {
    width: 100%;
    height: 340px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 28px 24px;
    border-radius: 18px;
    color: #ffffff;
    text-align: center;
    user-select: none;
  }

  .icono {
    display: flex;
    font-size: 64px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .swiper-pagination-fraction {
    bottom: 14px;
    font-size: 0.8rem;
  }
`;
