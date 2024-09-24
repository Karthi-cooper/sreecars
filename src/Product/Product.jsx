 

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';

// export const Product = ({ collections, Collect }) => {
//   const { id } = useParams();

//   console.log("Product ID from URL:", id);

//   // First search in collections
//   let product = collections.find(item => item.id === id || item.id === parseInt(id, 10));

//   // If not found, search in Collect
//   if (!product) {
//     product = Collect.find(item => item.id === id || item.id === parseInt(id, 10));
//   }

//   if (!product) {
//     console.log("Product not found for ID:", id);
//     return <div>Product not found</div>;
//   }

//   console.log("Found Product:", product);

//   return (
//     <>
//     <LazyLoad>
//       <div className="max-w-8xl mx-auto p-6">
//         <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg mb-8">
//           <div className="lg:flex-1 p-4">
//             <h1 className="text-3xl font-bold mb-4 text-center">{product.brand}</h1>
//             <p className="text-lg mb-2">Price: Rs {product.price}</p>
//             <p className="text-base mb-4">Description: {product.description}</p>
//           </div>
//           <div className="lg:flex-1 p-2">
//             {/* <video
//               className="w-full h-72 lg:h-full object-cover rounded-lg"
              
//               src={`../src/Asset/${product.img}`}
//               title={product.brand}
//             >
//               Your browser does not support the video tag.
//             </video> */}

            
//             <img src= {`/Asset/${product.img}`}alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
//         <img
//           src={`/Asset/${product.img1}`}
//           alt={product.brand}
//           className="w-full h-52 object-cover rounded-lg"
//         />
//         <img
//           src={`/Asset/${product.img2}`}
//           alt={product.brand}
//           className="w-full h-52 object-cover rounded-lg"
//         />
//         <img
//           src={`/Asset/${product.img3}`}
//           alt={product.brand}
//           className="w-full h-52 object-cover rounded-lg"
//         />
//         <img
//           src={`/Asset/${product.img4}`}
//           alt={product.brand}
//           className="w-full h-52 object-cover rounded-lg"
//         />
        
//       </div>
//       </LazyLoad>
//     </>
//   );
// };

// export default Product;


   {/* Thumbnails */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          <img
            src={`/Asset/${product.img1}`}
            alt={product.brand}
            className="w-full h-52 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(product.img1)}
          />
          <img
            src={`/Asset/${product.img2}`}
            alt={product.brand}
            className="w-full h-52 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(product.img2)}
          />
          <img
            src={`/Asset/${product.img3}`}
            alt={product.brand}
            className="w-full h-52 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(product.img3)}
          />
          <img
            src={`/Asset/${product.img4}`}
            alt={product.brand}
            className="w-full h-52 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(product.img4)}
          />
        </div> */}


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
// import '../Product/Product.css';
// // import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { PiEngineFill } from "react-icons/pi";

 

// export const Product = ({ collections, Collect }) => {
//   const { id } = useParams();
  
//   console.log("Product ID from URL:", id);

//   // First search in collections
//   let product = collections.find(item => item.id === id || item.id === parseInt(id, 10));

//   // If not found, search in Collect
//   if (!product) {
//     product = Collect.find(item => item.id === id || item.id === parseInt(id, 10));
//   }

//   if (!product) {
//     console.log("Product not found for ID:", id);
//     return <div>Product not found</div>;
//   }

//   console.log("Found Product:", product);

//   // State to manage the currently displayed image
//   const [mainImage, setMainImage] = useState(product.img);

//   const handleImageClick = (img) => {
//     setMainImage(img); // Update the main image when a thumbnail is clicked
//   };

//   return (
//     <>
//       <LazyLoad>
//         <div className="max-w-8xl mt-5 mx-auto p-6">
//           <div className="flex flex-col lg:flex-row   p-6 rounded-lg shadow-lg   ">

//             {/* text content */}
//             <div className="bg-gradient-to-r from-slate-100 to-gray-300  lg:h-96 rounded-xl shadow-xl lg:flex-1 lg:mt-10 p-4 order-3 text-black">
              
//               <h1 className='text-2xl justify-center text-center font-thin '>Car Details</h1>

//               <div className='text-center mt-6'>
//               <h1 className="text-3xl font-bold mb-4 ">{product.brand}</h1>
              
//               <p className="text-lg mb-2  "><span className='font-bold'>Price</span>: Rs <span className='font-semibold text-xl'>{product.price}</span></p>

//               {/* <p className="text-base mb-4 "> <span className='font-bold'> Distance: </span> {product.distance}</p>

//               <p className="text-base mb-4 "> <span className='font-bold'> Insurance: </span> <span className=''>{product.insurance}</span> </p>

//               <p className="text-base mb-4 "> <span className='font-bold'> Onwer: </span> <span className=''>{product.owner}</span> </p> */}

           
                  
//                  <p className='text-center text-xl text-wrap'>{product.mode}  {product.brand}, {product.owner}, well-maintained with a clean  {product.insurance}. This <span className='font-semibold'>{product.oil}</span> vehicle has only traveled  <span className='font-bold'>{product.distance} </span>kilometers, ensuring it's in excellent condition. Ideal for those looking for a reliable and efficient ride with a solid performance history. Don't miss out on this great opportunity!</p>

//                  <div className='flex justify-center'>
//                     <div className=''>
//                       <i><PiEngineFill /></i>
//                       <h3>{product.oil}</h3>
//                       </div>
//                  </div>

//                  </div>
//             </div>

//             <div className="lg:flex-1   p-2 mx-auto   items-end">
//               {/* Main image */}

//               <img className="rounded-2xl w-full ml-2 lg:ml-24 mb-2 lg:w-96 h-72 lg:h-96  object-fit" src={`/Asset/${mainImage}`} alt={product.brand} />

//               {/* thumbnails */}
//               <div className='flex flex-wrap gap-3 justify-center lg:justify-start ml-4 order-2 ' id='productimg'>
//             <img
//             src={`/Asset/${product.img1}`}
//             // alt={product.brand}
//             className="  lg:w-30 lg:h-28 object-fit rounded-lg cursor-pointer"
//             onClick={() => handleImageClick(product.img1)}
//           />
//            <img
//             src={`/Asset/${product.img2}`}
//             // alt={product.brand}
//             className="lg:w-30 lg:h-28 object-cover rounded-lg cursor-pointer"
//             onClick={() => handleImageClick(product.img2)}
//           />
//           <img
//             src={`/Asset/${product.img3}`}
//             // alt={product.brand}
//             className="lg:w-30 lg:h-28 object-cover rounded-lg cursor-pointer"
//             onClick={() => handleImageClick(product.img3)}
//           />
//           <img
//             src={`/Asset/${product.img4}`}
//             // alt={product.brand}
//             className="  lg:w-30 lg:h-28 object-cover rounded-lg cursor-pointer"
//             onClick={() => handleImageClick(product.img4)}
//           />
//            </div>
//             </div>
//           </div>
//         </div>
//       </LazyLoad>
//     </>
//   );
// };

// export default Product;


 
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../Product/Product.css';
import { PiEngineFill } from "react-icons/pi";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa6";

export const Product = ({ collections, Collect }) => {
  const { id } = useParams();
  let product = collections.find(item => item.id === id || item.id === parseInt(id, 10));

  if (!product) {
    product = Collect.find(item => item.id === id || item.id === parseInt(id, 10));
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const [mainImage, setMainImage] = useState(product.img);
  const [showMore, setShowMore] = useState(false);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <LazyLoad>
      <div className="max-w-8xl mt-5 mx-auto p-6">
        <div className="flex flex-col lg:flex-row p-6 rounded-lg shadow-lg">

          {/* text content */}
          <div className="bg-gradient-to-r from-slate-100 to-gray-300 lg:h-96 rounded-xl shadow-xl   lg:flex-1 lg:mt-10 p-4 order-3 text-black">
            <h1 className='text-2xl justify-center text-center font-thin'>Car Details</h1>
            <div className='text-center mt-6'>
              <h1 className="text-3xl font-bold mb-4">{product.brand}</h1>
              <p className="text-lg mb-2"><span className='font-bold'>Price</span>: Rs <span className='font-semibold text-xl'>{product.price}</span></p>

              <p className='text-center text-m text-wrap '>
                {product.mode} {product.brand}, {product.owner}, well-maintained with a clean {product.insurance}. This <span className='font-semibold'>{product.oil}</span> vehicle has only traveled <span className='font-bold'>{product.distance}</span>  
                {showMore && (
                  <> ensuring it's in excellent condition. Ideal for those looking for a reliable and efficient ride with a solid performance history. Don't miss out on this great opportunity!</>
                )}
              </p>

              <button className='text-blue-500 mt-2' onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
              </button>

             
            </div>
            <div className=' lg:flex  gap-4 justify-center mt-5'>
            <div className=' flex ml-2'>
              <i className=''> <BsFuelPumpDieselFill />
              </i>
                <h3 className=' ml-5'>{product.oil}</h3>
               </div>
             <div className='flex   ml-2'>
            <i className="text-xl"> <IoIosSpeedometer />
            </i>
            <h3 className='  ml-5'>{product.distance}</h3>
               </div>
             <div className='flex  ml-2'>
               <i className="text-xl"> <FaMoneyCheck /></i>
              <h3 className='  ml-5'>{product.insurance}</h3>
              </div>

</div>


          </div>

          <div className="lg:flex-1 p-2 mx-auto items-end">
            {/* Main image */}
            <img className="rounded-2xl w-full ml-2 lg:ml-14 mb-2 lg:w-96 h-72 lg:h-96 object-fit" src={`/sreecars/Asset/${mainImage}`} alt={product.brand} />

            {/* thumbnails */}
            <div className='flex flex-wrap gap-3 justify-center lg:justify-start ml-4 order-2' id='productimg'>
              <img src={`/sreecars/Asset/${product.img1}`} className="lg:max-w-28 lg:max-h-28 object-fit rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img1)} />
              <img src={`/sreecars/Asset/${product.img2}`} className="lg:max-w-28 lg:max-h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img2)} />
              <img src={`/sreecars/Asset/${product.img3}`} className="lg:max-w-28 lg:max-h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img3)} />
              <img src={`/sreecars/Asset/${product.img4}`} className="lg:max-w-28 lg:max-h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img4)} />
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Product;
