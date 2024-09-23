import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// Import Swiper styles
import "swiper/css";

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import GetInTouch from "./getInTouch";

// Sample images and titles
const workCollections = [
  {
    id: 0,
    title: "Project 0",
    imageUrl: "/asset/landing/suspended_ceiling-installation.jpg",
  },
  {
    id: 1,
    title: "Project 1",
    imageUrl: "/asset/landing/sliding_fabrication.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "/asset/landing/Casemet_frames_brown.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "/asset/landing/art-tools-mini.png",
  },
  {
    id: 4,
    title: "Project 4",
    imageUrl: "/asset/landing/stairs_handrail.jpg",
  },
  {
    id: 5,
    title: "Project 5",
    imageUrl: "/asset/landing/balcony_stainless.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    imageUrl: "/asset/landing/office_partition.jpg",
  },
  {
    id: 7,
    title: "Project 7",
    imageUrl: "/asset/landing/saw-and-safetyHelmet.jpg",
  },
  {
    id: 8,
    title: "Project 8",
    imageUrl: "/asset/landing/cross-section cutting wall.jpg",
  },
  // {
  //   id: 9,
  //   title: "Project 8",
  //   imageUrl: "/asset/landing/.jpg",
  // },
];

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Greeting Message */}
      <div className="absolute z-10 p-5 pb-0 top-[30em] md:top-[20em] lg:top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ring ring-white text-white  lg:p-10 md:p-5 overflow-y-hidden">
        <div className="absolute bg-black opacity-10"></div>
        <h1
          className="text-5xl font-bold my-5"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Beautiful, Durable Windows for Every Home
        </h1>
        <p
          className="text-lg line-clamp-3 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          We offer the best window solutions for residential and commercial
          buildings, ensuring quality and customer satisfaction.
          {/* Discover the best and get inspired by a brand you can trust. */}
        </p>

        <GetInTouch />
      </div>

      {/* Swiper Slider */}
      <div className="relative h-screen ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 * 2, disableOnInteraction: false }}
          className="h-full"
        >
          {workCollections.map((work) => (
            <SwiperSlide key={work.id}>
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingPage;
