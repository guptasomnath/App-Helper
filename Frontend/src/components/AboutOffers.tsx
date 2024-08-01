export default function AboutOffers() {
  return (
    <ul className="flex items-center justify-center gap-5 flex-wrap">
      {[1, 2, 3, 4].map((_) => (
        <li className="relative h-80 min-w-[10rem] shadow-2xl w-[10rem] flex-shrink-0 overflow-hidden flex-grow">
          <img src="/2147811324.jpg" className="size-full object-cover" />
          <div className="size-full absolute top-0 bg-[#00000079] flex justify-end items-start flex-col p-5 space-y-2">
            <h2 className="font-semibold text-white leading-none">20% Off On Tank Tops </h2>
            <p className="text-xs text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta.
            </p>
            <button className="bg-yellow-50 text-[0.65rem] uppercase px-7 py-2 pt-[10px]">
              Shop Now
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
