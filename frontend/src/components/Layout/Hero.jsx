import { Link } from "react-router-dom";
// import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            {/* Vacation <br /> Ready */}
          </h1>
          <p className="text-lg tracking-tighter md:text-lg mb-6">
            Explore our outfits with fast worldwide shipping
          </p>
          <Link to="#" className="bg-white text-gray-950 px-8 py-3 rounded-sm text-lg">
          Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
