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
  return (
    <>
      <div className="flex justify-between flex-wrap sm:justify-end sm:gap-5">
        <Category categories={categories}/>
        <Filters />
      </div>
      <Projects fetchProjectsKey="ALL_PROJECTS" showPagination={true} />
    </>
  );
}
