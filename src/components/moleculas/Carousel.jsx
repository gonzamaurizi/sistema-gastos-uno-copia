import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselData } from "../../utils/dataCarousel";

/**
 * Carrusel de tarjetas apiladas (Swiper con efecto "cards").
 * Se desliza con el dedo, el mouse, las flechas o el teclado, y cada
 * tarjeta lleva a su sección al tocarla.
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
        {slides.map(({ titulo, descripcion, icono: Ico, colores, to }) => (
          <SwiperSlide
            key={titulo}
            style={{
              background: `linear-gradient(160deg, ${colores[0]}, ${colores[1]})`,
            }}
          >
            <Link to={to} className="tarjeta">
              <span className="icono">
                <Ico />
              </span>
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
              <span className="ir">Ir a {titulo} →</span>
            </Link>
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
    border-radius: 18px;
    color: #ffffff;
    text-align: center;
    user-select: none;
  }

  /* Toda la tarjeta es un link a su sección */
  .tarjeta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    padding: 28px 24px 40px;
    border-radius: 18px;
    color: inherit;
    text-decoration: none;

    &:focus-visible {
      outline: 3px solid #ffffff;
      outline-offset: -6px;
    }
  }

  .ir {
    margin-top: 4px;
    padding: 6px 14px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
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
