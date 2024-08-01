import ImageSlider from "./ImageSlider";

export default function Banner() {
  const banner_list = [
    "https://picsum.photos/id/237/1100/300",
    "https://picsum.photos/id/238/1100/300",
    "https://picsum.photos/id/239/1100/300",
    "https://picsum.photos/id/240/1100/300",
  ];

  return (
    <div className="mb-10 h-60 sm:h-36 relative flex items-center overflow-hidden">
      <ImageSlider image_list={banner_list} />
    </div>
  );
}
