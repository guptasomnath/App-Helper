import Category from "../components/Category";
import Filters from "../components/Filters";
import Projects from "../components/Projects";

export default function Products() {
  return (
    <>
      <div className="flex justify-between flex-wrap sm:justify-end sm:gap-5">
        <Category />
        <Filters />
      </div>
      <Projects fetchProjectsKey="ALL_PROJECTS" showPagination={true} />
    </>
  );
}
