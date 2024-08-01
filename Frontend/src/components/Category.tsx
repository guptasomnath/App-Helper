import { Link, useSearchParams } from "react-router-dom";
import { decodeUrl, encodeUrl, toTitleCase } from "../utils/purifyUrl";

export default function Category() {
  const categorys = [
    "Aia File",
    "Extension",
    "Sketchware Swb File",
    "Sketchware Block",
  ];

  const searchParams = useSearchParams();

  let curretnTab = toTitleCase(decodeUrl(searchParams[0].get("category") || ""));
  if (curretnTab === "") curretnTab = "Aia File";

  return (
    <ul className="flex items-center gap-5 sm:overflow-x-scroll hide-scrollbar">
      {categorys.map((item, index) => (
        <li key={index}>
          <Link
            className={`px-5 py-2 text-sm rounded-full ${
              curretnTab === item
                ? "bg-[#a2d6c6] text-gray-900"
                : "bg-white text-black"
            } transition-all duration-300 flex-center cursor-pointer text-nowrap`}
            to={`?category=${encodeUrl(categorys[index])}`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
