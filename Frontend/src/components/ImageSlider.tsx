import { useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { purifyText } from "../utils/purifyText";
import { replaceImageUrl } from "../utils/replaceImageUrl";

interface IProps {
  image_list: string[];
}

export default function ImageSlider({ image_list }: IProps) {
  const [curent, setCurrent] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goNext = () => {
    setCurrent((preState) => {
      if (preState === image_list.length - 1) return 0;
      return preState + 1;
    });
  };

  const goPrev = () => {
    setCurrent((preState) => {
      if (preState === 0) return image_list.length - 1;
      return preState - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a minimum distance for a valid swipe

    if (distance > minSwipeDistance) {
      //swipe left
      goNext();
    } else if (distance < -minSwipeDistance) {
      //swipe right
      goPrev();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <button
        onClick={goPrev}
        className="absolute z-10  size-10 flex-center text-white bg-[#00000065]"
      >
        <MdNavigateNext size={25} className="rotate-180" />
      </button>
      <div className="w-full flex">
        {image_list.map((src, index) => (
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            key={index}
            // style={{ translate: `-${curent * 100}%` }}
            className={`size-full absolute top-0 ${
              index === curent ? "opacity-100 scale-100" : "opacity-0 scale-125"
            } flex-shrink-0 transition-all duration-[1500ms] bg-slate-200`}
          >
            <img
              className={`size-full z-10 ${
                index === 0 ? "object-cover" : "object-contain"
              }`}
              alt=""
              src={replaceImageUrl(purifyText(src))}
            />

            {/* <LazyLoadImage loading="eager" className="size-full object-cover sm:object-contain" alt="" src={src}/> */}
          </div>
        ))}
      </div>
      <button
        onClick={goNext}
        className="absolute z-10 right-0 size-10 flex-center text-white bg-[#00000065]"
      >
        <MdNavigateNext size={25} />
      </button>
    </>
  );
}
