import React, { useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface IProps {
  searchInputVisibility: boolean;
  setSearchInputVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBox({
  searchInputVisibility,
  setSearchInputVisibility,
}: IProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  // const searchParams = new URLSearchParams(window.location.search);
  // const currentCategory = searchParams.get("category");
  // const [placeholder, setPlaceholder] = useState<string>("web apps");

  const handleSearchBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const searchValue = form.get("search");

    if (!searchValue)
      return searchInputRef.current?.setCustomValidity(
        "Enter something to search"
      );

    // searchParams.set("search", searchValue as string);
    // navigate(`?${searchParams.toString()}`);
    navigate(`?search=${searchValue.toString()}`);
    setSearchInputVisibility(false);
  };

  const closeSearchBtnClick = () => {
    setSearchInputVisibility(false);
  };

  useEffect(() => {
    if (searchInputVisibility) {
      const timeOutID = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);

      return () => clearTimeout(timeOutID);
    }
  }, [searchInputVisibility]);

  // useEffect(() => {
  //   if (currentCategory) {
  //     setPlaceholder(currentCategory.replaceAll("-", " "));
  //   }
  // }, [currentCategory]);

  return (
    <div
      onClick={closeSearchBtnClick}
      className={`flex-grow pl-36 visible sm:fixed sm:h-full sm:bg-[#00000054] sm:top-0 ${
        searchInputVisibility
          ? "sm:visiable sm:opacity-100"
          : "sm:invisible sm:opacity-0"
      } sm:z-20 sm:pl-0 sm:flex sm:items-start sm:justify-center sm:left-0 sm:right-0 md:pl-14 lg:pl-20 transition-all duration-300`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSearchBtnClick}
        className={`bg-[#F4F5F9] sm:relative ${
          searchInputVisibility ? "sm:top-20" : "sm:-top-full"
        } w-[65%] sm:w-[80%] md:w-[90%] lg:w-[90%] sm:border-2 sm:shadow-xl flex items-center px-5 py-[0.7rem] rounded-full sm:rounded-lg sm:px-4 transition-all duration-300`}
      >
        <input
          key={"input"}
          required
          name="search"
          ref={searchInputRef}
          className="outline-none bg-transparent flex-grow text-sm placeholder:text-gray-400"
          type="text"
          // defaultValue={searchParams.get("search") || ""}
          placeholder={`Search projects..`}
        />
        <button type="submit" className="sm:hidden">
          <IoSearch size={20} />
        </button>
      </form>
    </div>
  );
}
