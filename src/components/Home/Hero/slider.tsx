import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedeta } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="mt-16 lg:-mt-16">
      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-4">
            <div className="bg-dark_grey bg-opacity-80 rounded-xl h-full min-h-[155px] px-5 py-6 flex flex-col justify-between">
              {/* Icon + Title + Description */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`${item.background} ${item.padding} rounded-full flex-shrink-0`}
                >
                  <Image
                    src={`${getImagePrefix()}${item.icon}`}
                    alt={`${item.title} - NepByte IT Services`}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <div className="text-white text-sm leading-snug">
                  <p className="text-[16px] font-bold mb-1">{item.title}</p>
                  <p className="text-white/80 text-xs font-normal">{item.short}</p>
                </div>
              </div>

              {/* Price and Mark */}
              {(item.price || item.mark) && (
                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <p className="text-16 font-bold text-white">{item.price}</p>
                  <span className="text-error text-xs">{item.mark}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
