import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const NewArrivals = () => {
//   const newArrivals = [
//     {
//       _id: "1",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "2",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "3",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "4",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "5",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "5",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "6",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "7",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: "8",
//       name: "stylish Jacket",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/random=1",
//           altText: "Stylish Jacket",
//         },
//       ],
//     },
//   ];
  return (
    <section>
      <div className="max-w-[1400px] mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4 ">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Fresh styles that are comfy, cool, and made to turn heads. Perfect for
          daily looks or standout moments. Shop your faves now!
        </p>
        <div className="absolute mt-5 right-0 bottom-[-30px] flex space-x-2">
          <button className="p-1 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-1 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
