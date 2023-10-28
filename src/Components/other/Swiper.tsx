
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../static/Header';

const slideContent = [
    {
        heading1: "Xperience Box",
        heading2: "Best Custom Xbox Controllers in Morocco",
        paragraph: "Xperience custom Xbox controllers, expertly designed to give you everything you love about Xperience  while enhancing your play experience beyond any other Xbox wireless controller. The xperience Controller is not only a top in class Xbox controller, but with the ability to plug and play directly into your gaming PC it is also the best Xbox controller for PC.",
        imgURl: "/assets/Products_Images/BloodDragon.webp",
    },
    {
        heading1: "Play Like Pro",
        heading2: "Best Custom Xbox Controllers in Morocco",
        paragraph: "Every aspect of Instinct was designed to live up to its name. Four embedded, rear remappable paddles, three configuration profiles, and interchangeable thumbsticks make this our most innovative Xbox controller yet. Play better. Play faster.",
        imgURl: "/assets/Products_Images/ChoesKnight.webp",
    },
    {
        heading1: "Gaming Legend",
        heading2: "Best Custom Xbox Controllers in Morocco",
        paragraph: "We’ve redesigned our rear Remappable Paddles and embedded them within the controller placing them at your fingertips for faster play while also increasing their durability. Instinct’s all-new textured thumbstick grip improves precision and accuracy. Every aspect of Instinct was designed to live up to its name. Play better. Play faster.",
        imgURl: "/assets/Products_Images/BlueFlame.webp",
    },
] 

export default function SwiperComp() {
  return (
    <>
      <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            slideContent.map((item, i) => (
                <SwiperSlide key={i}>
                    <Header heading1={item.heading1} heading2={item.heading2} paragraph={item.paragraph} imgURL={item.imgURl} />
                </SwiperSlide>
            ))

        }
        
      </Swiper>
    </>
  );
}
