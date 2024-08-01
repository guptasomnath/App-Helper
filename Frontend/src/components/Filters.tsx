import { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const filters = [
  {
    title: "Most Popular",
    path: "most-popular",
  },
  {
    title: "Free",
    path: "free",
  },
  {
    title: "Paid",
    path: "paid",
  },
];

export default function Filters() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(-1);
  const searchParams = useSearchParams(window.location.search);
  const filter = searchParams?.[0].get("filter");

  const onFilterItemClicked = (index: number) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("filter", filters[index].path);
    navigate(`?${urlSearchParams.toString()}`);
    setCurrentIndex(index);
  };

  useEffect(() => {
    
    const currentFilterIndex = filters.findIndex(
      (item) => item.path == filter
    );
    setCurrentIndex(currentFilterIndex);
  }, [filter]);

  return (
    <div className="flex items-center">
      <div className="relative inline-block text-left group/filter">
        <div>
          <button
            type="button"
            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Sort Products
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`invisible group-focus-within/filter:visible absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {filters.map((filter, index) => (
              <button
                key={filter.path}
                onClick={() => onFilterItemClicked(index)}
                className={`block px-4 py-2 text-sm font-medium ${
                  currentIndex === index ? "text-gray-500" : "text-gray-900"
                }`}
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {filter.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
