"use client";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

// T-shirt products data - using available images including new design
const products = [
  {
    id: 1,
    image: "/images/new-tshirt-design.png",
    title: "TRUETICKMAN New Design Tee - Special Edition",
    price: 50,
    oldPrice: 100,
    discount: "-50%"
  },
  {
    id: 2,
    image: "/images/tshirt-gray.png",
    title: "TRUETICKMAN Classic Tee - Gray",
    price: 30,
    oldPrice: 60,
    discount: "-50%"
  },
  {
    id: 3,
    image: "/images/tshirt-brown.png",
    title: "TRUETICKMAN Vintage Tee - Brown",
    price: 30,
    oldPrice: 60,
    discount: "-50%"
  },
  {
    id: 4,
    image: "/images/tshirt-gray.png",
    title: "TRUETICKMAN Sport Tee - Gray Edition",
    price: 35,
    oldPrice: 70,
    discount: "-50%"
  },
  {
    id: 5,
    image: "/images/tshirt-brown.png",
    title: "TRUETICKMAN Retro Tee - Brown Edition",
    price: 35,
    oldPrice: 70,
    discount: "-50%"
  },
  {
    id: 6,
    image: "/images/new-tshirt-design.png",
    title: "TRUETICKMAN Limited Edition - New Design",
    price: 45,
    oldPrice: 90,
    discount: "-50%"
  }
];

export default function Shop() {
  const handleDownload = (productTitle: string) => {
    console.log(`Downloading: ${productTitle}`);
    // Add download logic here
    alert(`Thank you for purchasing ${productTitle}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <Header />
      
      {/* Shop Header Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              SHOP
            </h2>
            <div className="w-16 md:w-24 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Official TRUETICKMAN merchandise featuring our latest special edition design. Premium quality materials and exclusive artwork.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 md:pb-16 lg:pb-24 px-3 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                onDownload={() => handleDownload(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wide">
              LIMITED TIME OFFER
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 px-2">
              Get 50% off on all TRUETICKMAN merchandise! Use code <span className="font-bold text-yellow-300">TRUETICK50</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
              <button className="bg-white text-red-700 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base">
                SHOP NOW
              </button>
              <button className="border-2 border-white text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-white hover:text-red-700 transition-colors text-sm md:text-base">
                VIEW ALL TEES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}