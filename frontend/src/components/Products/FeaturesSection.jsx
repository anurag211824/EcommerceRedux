import {HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2"; // 'hi2' is for Heroicons v2

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4  bg-white">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiShoppingBag className="text-2xl" />
            </div>
            <h4 className="tracking-tighter mb-2 uppercase">Free international shipping</h4>
            <p className="text-gray-600 text-sm ttracking-tighter"> On all orders over $100.00</p>
        </div>
         {/* Feature 2 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiArrowPathRoundedSquare  className="text-2xl" />
            </div>
            <h4 className="tracking-tighter mb-2 uppercase">45 Days return</h4>
            <p className="text-gray-600 text-sm ttracking-tighter">Money Back guarentee</p>
        </div>
         {/* Feature 3 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiOutlineCreditCard className="text-2xl" />
            </div>
            <h4 className="tracking-tighter mb-2 uppercase">Secure CheckOut</h4>
            <p className="text-gray-600 text-sm ttracking-tighter">100 % secured CheckOut process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
