import { useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import Filters from "../components/Filters";
import Projects from "../components/Projects";

const categories = [
  "Web Apps",
  "Aia File",
  "Extension",
  "Sketchware Swb File",
  "Sketchware Block",
];

export default function Products() {
  const searchParams = useSearchParams();
  return (
    <>
      <div className="flex justify-between flex-wrap sm:justify-end sm:gap-5">
        {searchParams[0].has("search") ? (
          <h3 className="font-medium text-2xl text-gray-700 tracking-wider">
            You Search Result
          </h3>
        ) : (
          <Category categories={categories} />
        )}

        <Filters />
      </div>
      <Projects fetchProjectsKey="ALL_PROJECTS" showPagination={true} />
    </>
  );
}
