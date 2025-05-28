import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/ProductSlice";
const CollectionPage = () => {
  const {collection} = useParams()
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const {products,loading,error} = useSelector((state)=>state.products)
  const queryParams = Object.fromEntries([...searchParams])

  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(()=>{
    dispatch(fetchProductsByFilters({
      collection,...queryParams
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch,collection,searchParams])
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    //Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    //Remove event listener for clicks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter />
        Filters
      </button>
      {/* Filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} ${
          isSidebarOpen ? "overflow-y-scroll" : ""
        } fixed inset-y-0 z-50 left-0 w-64 bg-white transition-transform duration-300 lg:static lg:translate-x-0 shadow-lg lg:shadow-none`}
      >
        <FilterSidebar className="overflow-y-scroll" />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl">All collection</h2>
        {/* sort options */}
        <SortOptions />
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
