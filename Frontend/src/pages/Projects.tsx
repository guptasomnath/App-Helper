import { useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import Filters from "../components/Filters";
import ProjectsComponent from "../components/Projects";
import { Helmet } from "react-helmet-async";

const categories = [
  "Web Apps",
  "Aia File",
  "Extension",
  "Sketchware Swb File",
  "Sketchware Block",
];

export default function Projects() {
  const searchParams = useSearchParams();
  return (
    <>
      <Helmet>
        <title>Projects - App Helper Store by Somnath Gupta</title>
        <meta
          name="description"
          content="Discover a collection of real-world coding projects including Premium Bathware, EdTech Full Stack Project, News Hub, and more, developed by Somnath Gupta."
        />
        <meta
          name="keywords"
          content="coding projects, JavaScript projects, React projects, MERN stack, Next.js projects, full-stack development"
        />
        <meta
          property="og:title"
          content="Projects - App Helper Store by Somnath Gupta"
        />
        <meta
          property="og:description"
          content="Browse a variety of real-world coding projects developed by Somnath Gupta, including full-stack applications and innovative web solutions."
        />
        <meta
          property="og:url"
          content="https://www.apphelper.store/projects"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/d/1GekyEMl_Gce3o6n0_YiDUPEcB4J2ezyz"
        />
      </Helmet>
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
      <ProjectsComponent
        fetchProjectsKey="ALL_PROJECTS"
        showPagination={true}
      />
    </>
  );
}
