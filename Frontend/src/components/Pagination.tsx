import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Pagination() {
  const navigation = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const currentSkip = parseInt(searchParams.get("skip") || "0");

  const goNext = () => {
    searchParams.set("skip", `${currentSkip + 13}`);
    navigation("?" + searchParams.toString());
  };
  const goPrev = () => {
    searchParams.set("skip", `${currentSkip - 13}`);
    navigation("?" + searchParams.toString());
  };

  return (
    <div className="w-full flex-center gap-5">
      <button
        onClick={goPrev}
        className={`size-10 flex-center rounded-3xl bg-[#d4d4d4] ${currentSkip === 0 ? "invisible" : "visible"}`}
      >
        <GrFormNext className="rotate-180" size={18} />
      </button>
      <button
        onClick={goNext}
        className="size-10 flex-center rounded-3xl bg-[#d4d4d4]"
      >
        <GrFormNext size={18} />
      </button>
    </div>
  );
}
