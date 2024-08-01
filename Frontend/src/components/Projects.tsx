import { LuDownload } from "react-icons/lu";
import { MdExtension } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { API_BASE_URL } from "../constant";
import { IProjects, ISuccess } from "../types";
import { decodeUrl, encodeUrl, toTitleCase } from "../utils/purifyUrl";
import { replaceSpacialChar } from "../utils/replaceSpacialChar";
import LoadingHandler from "./LoadingHandler";
import { replaceImageUrl } from "../utils/replaceImageUrl";
import Pagination from "./Pagination";

interface IProps {
  fetchProjectsKey: "HOME_PROJECTS" | "ALL_PROJECTS" | "LATEST_PRODUCTS";
  limitProductsToFetch?: number;
  showPagination?: boolean;
  extraQuery?: {
    key: string;
    value: string;
  };
}

export default function Projects({
  fetchProjectsKey,
  limitProductsToFetch,
  showPagination,
  extraQuery,
}: IProps) {
  //grid grid-cols-4 gap-5

  const searchParams = useSearchParams();
  const curretnTab = toTitleCase(
    decodeUrl(searchParams[0].get("category") || "")
  );
  const skip = searchParams[0].get("skip");
  const search = searchParams[0].get("search");
  const filter = searchParams[0].get("filter");

  const retrieveProjects = async () => {
    const searchP = new URLSearchParams(window.location.search);
    if (curretnTab !== "") {
      searchP.set("category", curretnTab);
    } else {
      searchP.set("category", "Aia File");
    }

    if (skip) {
      searchP.set("skip", skip);
    } else {
      searchP.set("skip", "0");
    }

    if (limitProductsToFetch) {
      searchP.set("limit", `${limitProductsToFetch}`);
    }

    if (extraQuery) {
      searchP.set(extraQuery.key, extraQuery.value);
    }

    const response = await axios.get(
      `${API_BASE_URL}/project?${searchP.toString()}`
    );

    return response.data;
  };

  const { data, error, isLoading } = useQuery<ISuccess<IProjects[]>, Error>({
    queryKey: [fetchProjectsKey, curretnTab, skip, search, filter],
    queryFn: retrieveProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  return (
    <LoadingHandler
      isLoading={isLoading}
      error={error}
      dataLength={data?.data?.length}
    >
      <ul className="mt-5">
        {data?.data?.map((item) => (
          <li
            key={item.ID}
            className="shadow-md w-[23%] float-left mx-[1%] sm:float-none sm:w-full md:w-[48%] lg:w-[31.33%] mb-5 bg-[var(--background-color)] p-3"
          >
            <Link to={`/projects/${encodeUrl(item.PROJECTNAME)}?id=${item.ID}`}>
              <div className="aspect-video overflow-hidden bg-[#b9b9b9] transition-all duration-500">
                <img
                  loading="lazy"
                  className="size-full object-cover transition-all duration-500"
                  alt="project-thumnail"
                  src={replaceImageUrl(replaceSpacialChar(item.THUMBNAIL))}
                />
              </div>
              <h2 className="font-semibold line-clamp-2 pt-2 h-14">
                {item.PROJECTNAME}
              </h2>
              <h3 className="text-xs font-semibold text-[var(--heading-color)] pt-[2px]">
                {item.STORENAME}
              </h3>

              <div className="flex pt-3 gap-5 items-center">
                <div className="flex-center text-xs gap-1">
                  <LuDownload /> {item.TOTALDOWNLOAD}
                </div>
                <div className="flex-center text-xs gap-1">
                  <MdExtension /> {item.VERSION}
                </div>
                <h4 className="flex-grow text-end font-medium text-[0.85rem] text-[var(--heading-color)]">
                  {item.PRICE}
                </h4>
              </div>
            </Link>
          </li>
          //   <li key={item.ID} className="relative min-w-[10rem] shadow-md w-[10rem] overflow-hidden flex-grow">
          //   <img src={item.THUMBNAIL} className="w-full h-40 object-cover" />
          //   <div className="size-full flex justify-end items-start flex-col p-5 space-y-2">
          //     <h2 className="font-semibold text-gray-700 leading-none line-clamp-1">{item.PROJECTNAME}</h2>
          //     <p className="text-xs text-gray-800">
          //       {item.STORENAME} | {item.PRICE} | {item.TOTALDOWNLOAD} Downloads
          //     </p>
          //     <button className="bg-yellow-50 text-[0.65rem] uppercase px-7 py-2 pt-[10px]">
          //       {item.PRICE === "Free" ? "Get" : "Shop"} Now
          //     </button>
          //   </div>
          // </li>
        ))}
      </ul>
      {showPagination ? <Pagination /> : null}
    </LoadingHandler>
  );
}
