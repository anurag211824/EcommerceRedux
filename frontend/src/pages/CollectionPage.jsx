import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 21,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=21" }],
        },
        {
          _id: 13,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=13" }],
        },
        {
          _id: 10,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
      ];
      setProducts(fetchedProducts);
    });
  }, []);
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
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
