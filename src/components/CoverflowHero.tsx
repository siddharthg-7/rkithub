import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export const CoverflowHero = () => {
  const items = [
    { title: "Java Development", img: "/rkithub_coding_session.png" },
    { title: "Full Stack Development", img: "/classroom_training.png" },
    { title: "Python Programming", img: "/mentor_guidance.png" },
    { title: "Testing Tools", img: "/placement_students.png" },
    { title: "Selenium", img: "/classroom_training.png" },
    { title: "Digital Marketing", img: "/event_banner.png" },
  ];

  return (
    <section className="hero bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col items-center justify-center pt-24 pb-16">
      <div className="text-center max-w-4xl mx-auto px-6 mb-12">


        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-6">
          RK IT Training HUB<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
            Your Pathway to Success
          </span>
        </h1>

        <p className="text-[1.05rem] text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Master Today, Excel Tomorrow. Embark on your IT career with confidence. Enhance your skills with expert-crafted courses designed to unlock new opportunities and shape your professional future.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { val: '2', label: 'Clients' },
            { val: '50', label: 'Projects' },
            { val: '300', label: 'Students' },
            { val: '10', label: 'Trainers' }
          ].map((stat, i) => (
            <div key={i} className="bg-blue-900/10 border border-blue-800/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-yellow-400">{stat.val}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        navigation={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        speed={1000}
        initialSlide={1}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          scale: 0.9,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.img} alt={item.title} />
              <div className="cardContent">
                <h2>{item.title}</h2>
                <p>Interactive Session</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link to="/courses" className="card flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 hover:from-blue-800/50 hover:to-indigo-800/50 transition-all border border-white/10 hover:border-yellow-500/50">
            <h2 className="text-2xl font-bold text-white mb-2">View More</h2>
            <p className="text-slate-400 text-sm">Explore all programs</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/30 text-yellow-500 group-hover:bg-yellow-500/20">
              →
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      <style>{`
        .hero {
          position: relative;
        }

        .mySwiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 60px;
          position: relative;
        }

        .swiper-slide {
          width: 320px;
          height: 480px;
          transition: transform 0.4s ease;
        }

        .card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          filter: blur(8px);
          opacity: 0.4;
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cardContent {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 24px;
          background: linear-gradient(
            transparent,
            rgba(2, 6, 23, 0.9)
          );
          color: white;
        }

        .cardContent h2 {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
        }

        .cardContent p {
          margin-top: 4px;
          font-size: 14px;
          color: #94a3b8;
        }

        /* Active slide effect */
        .swiper-slide-active .card {
          transform: scale(1.05);
          border-color: rgba(234, 179, 8, 0.5); /* Yellow border for active */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          filter: blur(0);
          opacity: 1;
        }

        /* Navigation Buttons */
        .swiper-button-prev,
        .swiper-button-next {
          color: #eab308 !important;
          background: rgba(2, 6, 23, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          z-index: 20;
          transition: background 0.3s, border-color 0.3s;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(2, 6, 23, 1);
          border-color: rgba(234, 179, 8, 0.5);
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-button-prev {
          left: calc(50% - 240px) !important;
        }

        .swiper-button-next {
          right: calc(50% - 240px) !important;
        }

        /* Side fade overlays */
        .mySwiper::before,
        .mySwiper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .mySwiper::before {
          left: 0;
          background: linear-gradient(
            to right,
            #020617,
            transparent
          );
        }

        .mySwiper::after {
          right: 0;
          background: linear-gradient(
            to left,
            #020617,
            transparent
          );
        }

        @media (max-width: 768px) {
          .swiper-slide {
            width: 260px;
            height: 380px;
          }
          .mySwiper::before,
          .mySwiper::after {
            width: 50px;
          }
          .swiper-button-prev {
            left: 10px !important;
          }
          .swiper-button-next {
            right: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CoverflowHero;
