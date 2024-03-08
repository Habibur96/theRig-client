import SlickSlider from "./slickSlider";

const Guides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#ffffff]">
      <div className="text-center font-bold bg-[#545578] h-40 mb-4">
        <h3 className="text-gray text-lg pt-4">GUIDE</h3>
        <h1 className="text-[#ffffff] text-3xl mt-3">
          Magnificent AMD Gaming/Streaming Build
        </h1>
      </div>

      
      <SlickSlider></SlickSlider>
    </div>
  );
};

export default Guides;
