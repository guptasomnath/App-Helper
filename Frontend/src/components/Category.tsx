import { Link, useSearchParams } from "react-router-dom";
import { decodeUrl, encodeUrl, toTitleCase } from "../utils/purifyUrl";
import BadgeItem from "./BadgeItem";

interface IProps {
  categories: string[];
  itemDisiable?: boolean;
}

export default function Category({ categories }: IProps) {
  const searchParams = useSearchParams();

  let curretnTab = toTitleCase(
    decodeUrl(searchParams[0].get("category") || "")
  );
  if (curretnTab === "") curretnTab = "Web Apps";

  return (
    <ul className={`flex items-center gap-5 sm:overflow-x-scroll hide-scrollbar`}>
      {categories.map((item, index) => (
        <li key={index}>
          <Link to={`?category=${encodeUrl(categories[index])}`}>
            <BadgeItem
              className={
                curretnTab === item
                  ? "bg-[#a2d6c6] text-gray-900"
                  : "bg-white text-black"
              }
            >
              {item}
            </BadgeItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}
