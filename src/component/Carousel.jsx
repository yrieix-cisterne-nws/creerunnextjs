import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const InterviewCarousel = () => {
  const images = [
    "/interview.png",
    "/q1.png",
    "/q2.png",
    "/q3.png",
    "/q4.png",
    "/q5.png",
    "/q6.png",
    "/q7.png",
  ];

  return (
    <section className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl pr-4 ml-2 mr-2">
      <h2 className="text-xl font-semibold mb-2">Interview d'un étudiant</h2>
      <p>
        J'ai réalisé une interview et créé un carrousel pour présenter un étudiant de la Normandie Web School, en alternance chez
        <a href="https://jwin.fr/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> JWIN</a>.
      </p>

      {/* Swiper Carrousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mt-4 sm:h-[950px] object-contain "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InterviewCarousel;
