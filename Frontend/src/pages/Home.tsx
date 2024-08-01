// import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import AboutOffers from "../components/AboutOffers";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import { GrFormNextLink } from "react-icons/gr";

function Home() {
  return (
    <>
      <Banner />
      <AboutOffers />
      <div className="pt-10 w-full space-y-2 flex items-center justify-between">
        <h2 className="text-xl text-left uppercase font-semibold">
          Our Most Popular{" "}
          <span className="bg-[var(--button-bg)] px-2 text-white">
            Products
          </span>
        </h2>

        <Link to="/products" className="text-sky-800 text-sm flex-center gap-1">
          <span>Explore more</span>
          <GrFormNextLink size={18} />
        </Link>
      </div>
      <Projects
        fetchProjectsKey="HOME_PROJECTS"
        limitProductsToFetch={4}
        showPagination={false}
        extraQuery={{
          key: "orderBy",
          value: "TOTALDOWNLOAD",
        }}
      />

      <div className="pt-10 w-full space-y-2 flex items-center justify-between">
        <h2 className="text-xl text-left uppercase font-semibold">
          Our Latest{" "}
          <span className="bg-[var(--button-bg)] px-2 text-white">
            Products
          </span>
        </h2>

        <Link to="/products" className="text-sky-800 text-sm flex-center gap-1">
          <span>Explore more</span>
          <GrFormNextLink size={18} />
        </Link>
      </div>
      <Projects
        fetchProjectsKey="LATEST_PRODUCTS"
        limitProductsToFetch={4}
        showPagination={false}
      />
    </>
  );
}

export default Home;
