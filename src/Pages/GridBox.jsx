import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Data from "../assets/Data";
import ProductCard from "./ProductCard"; // Adjust the path as necessary
import ContactUsButton from "./ContactUsButton";
import { Link } from "react-router-dom";


import image1 from "../assets/image 1.png";


const imgData = {
  image1
};

const GridBox = () => {
  const itemsPerPage = 20;
  const totalItems = Data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Calculate the boxes to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBoxes = Data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-2">
      {!selectedProduct ? (
        <div className="flex text-4xl pb-1">Featured Product</div>
      ) : (
        <div className="relative">
          <div className="flex justify-center" onClick={()=> 1}>
            <Link to="/"><div className="text-center text-4xl">B.planet</div></Link>
          </div>
          <div className="absolute top-0 right-0 p-4">
            <ContactUsButton />
          </div>
        </div>
      )}
      ,
      {selectedProduct ? (
        <ProductCard
          image={selectedProduct.image}
          title={selectedProduct.title}
          subTitle={selectedProduct.subTitle}
          guide={selectedProduct.guide}
          description={selectedProduct.description}
        />
      ) : (
        <div>
          <div className="grid grid-cols-4 border-collapse mb-4 w-3/7 min-h-custom flex-grow">
            {currentBoxes.map((box) => (
              <div
                key={box.id}
                className="flex gap-5 items-center justify-center h-32 w-56 bg-customColorbg border-2 border-customColorDark cursor-pointer"
                onClick={() => setSelectedProduct(box)}
              >
                <img src={box.image} alt="img" className="w-10" />
                <span className="text-md">{box.title}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 justify-end select-none">
            <div
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 text-black cursor-pointer select-none ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <GrFormPrevious />
              Previous
            </div>

            <span className="text-md">
              Page {currentPage} of {totalPages}
            </span>

            <div
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 text-black cursor-pointer ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
              <GrFormNext />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridBox;
