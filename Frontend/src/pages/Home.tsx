import { Helmet } from "react-helmet-async";
import Projects from "./Projects.tsx";

function Home() {
  return (
    // <>
    //   <Banner />
    //   <AboutOffers />
    //   <div className="pt-10 w-full space-y-2 flex items-center justify-between">
    //     <h2 className="text-xl text-left uppercase font-semibold">
    //       Our Most Popular{" "}
    //       <span className="bg-[var(--button-bg)] px-2 text-white">
    //         Products
    //       </span>
    //     </h2>

    //     <Link to="/products" className="text-sky-800 text-sm flex-center gap-1">
    //       <span>Explore more</span>
    //       <GrFormNextLink size={18} />
    //     </Link>
    //   </div>
    //   <Projects
    //     fetchProjectsKey="HOME_PROJECTS"
    //     limitProductsToFetch={4}
    //     showPagination={false}
    //     extraQuery={{
    //       key: "orderBy",
    //       value: "TOTALDOWNLOAD",
    //     }}
    //   />

    //   <div className="pt-10 w-full space-y-2 flex items-center justify-between">
    //     <h2 className="text-xl text-left uppercase font-semibold">
    //       Our Latest{" "}
    //       <span className="bg-[var(--button-bg)] px-2 text-white">
    //         Products
    //       </span>
    //     </h2>

    //     <Link to="/products" className="text-sky-800 text-sm flex-center gap-1">
    //       <span>Explore more</span>
    //       <GrFormNextLink size={18} />
    //     </Link>
    //   </div>
    //   <Projects
    //     fetchProjectsKey="LATEST_PRODUCTS"
    //     limitProductsToFetch={4}
    //     showPagination={false}
    //   />
    // </>
    <>
      <Helmet>
        <title>
          Real Projects and Coding Resources by Somnath Gupta - App Helper Store
        </title>
        <meta
          name="description"
          content="App Helper Store by Somnath Gupta offers real-world coding projects, tutorials, and resources to help you learn and improve your development skills."
        />
        <meta
          name="keywords"
          content="App Helper Store, Somnath Gupta, coding projects, JavaScript, React, Node.js, web development, tutorials, programming courses, developer portfolio"
        />
        <meta name="author" content="Somnath Gupta" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Real Projects and Coding Resources by Somnath Gupta - App Helper Store"
        />
        <meta
          property="og:description"
          content="Explore a wide range of coding projects and tutorials created by Somnath Gupta. Learn and improve your development skills with practical examples and courses."
        />
        <meta property="og:url" content="https://www.apphelper.store/" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/d/1GekyEMl_Gce3o6n0_YiDUPEcB4J2ezyz"
        />
      </Helmet>
      <Projects />
    </>
  );
}

export default Home;
