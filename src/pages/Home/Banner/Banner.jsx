import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";
import bannerImg5 from "../../../assets/images/banner/5.jpg";
import bannerImg6 from "../../../assets/images/banner/6.jpg";
import Slider from "./Slider";

const Banner = () => {
  const bannerImages = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
  ];
  return (
    <div className="hidden md:carousel w-full h-[calc(100vh-329px)] rounded-xl">
      {bannerImages.map((image, idx) => (
        <Slider key={idx} image={image} idx={idx}></Slider>
      ))}
    </div>
  );
};

export default Banner;
