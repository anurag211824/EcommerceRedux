import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data)
        console.log('====================================');
        console.log("HIIII");
        console.log('====================================');
      } catch (error) {
        console.error(error)

      }
    };
    fetchNewArrivals()
  },[]);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  const scroll = (direction) => {
    console.log("hi");

    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
    // console.log({
    //   scrollLeft: container.scrollLeft, // number of pixels the content of container has been scrolled
    //   clientWidth: container.clientWidth, // portion of container that is visible to the users
    //   containerScrollwidth: container.scrollWidth, // total width of scrollable content inside the container
    //   offsetLeft: scrollRef.current.offsetLeft,
    // });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  },[newArrivals]);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="max-w-[1400px] mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4 ">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Fresh styles that are comfy, cool, and made to turn heads. Perfect for
          daily looks or standout moments. Shop your faves now!
        </p>
        <div className=" top-[120px] sm:top-[10px] absolute mt-5 right-0 md:top-[30px] flex space-x-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-1 rounded border ${
              canScrollLeft
                ? "bg-white text=black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-1 rounded border ${
              canScrollRight
                ? "bg-white text=black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className={`newArrivals max-w-[1400px] mt-20 mx-auto overflow-x-scroll flex space-x-6 relative ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0].url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[400px] object-covver rounded-lg"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
