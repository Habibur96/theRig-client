
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Test = () => {
  return (
    <div>
      <CarouselProvider
        visibleSlides={2}
        totalSlides={1}
        step={2}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
      >
        {/* <h2 className={s.headline}>Carousel (Just One Image)</h2> */}
        <p>Single image</p>
        <Slider>
          <Slide tag="a" index={0}>
            <ImageWithZoom src="https://www.startech.com.bd/image/cache/catalog/processor/AMD/athlon-3000g/athlon-3000g-1-500x500.jpg" />
          </Slide>
        </Slider>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
        <DotGroup />
      </CarouselProvider>
    </div>
  );
};

export default Test;
