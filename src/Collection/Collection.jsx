 
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export const CollectionItem = ({ collection }) => {
//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     navigate(`/Product/${collection.id}`);
//   };

//   return (
//     <div className="col-12 col-md-6 col-lg-4 mb-4">
//       <div className="card" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
//         <img
//           className="card-img-top"
//           src={`../src/Asset/${collection.img}`}
//           alt={collection.brand}
//           style={{ height: '250px', width: '100%', objectFit: 'cover' }}
//         />
//         <div className="card-body">
//           <h2 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
//             {collection.brand}
//           </h2>
//           <div className="d-flex justify-content-between align-items-center" style={{ paddingTop: '10px' }}>
//             <h3 className="card-text" style={{ fontSize: '1rem' }}>
//               <span>Rs:</span> {collection.price} onwards
//             </h3>
//             <button className="bg-black text-white w-20 p-4" onClick={handleViewDetails}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export const CollectionList = ({ collections }) => {
// //   const limitedCollections = collections.slice(0, 6);
// //   return (
// //     <>
// //       {limitedCollections.map((collection) => (
// //         <CollectionItem key={collection.id} collection={collection} />
// //       ))}
// //     </>
// //   );
// // };

// // Add this export if it was intended to be used in NavCollection.jsx
// export const Collections = CollectionItem;

 


 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export const CollectionItem = ({ collection }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Product/${collection.id}`);
  };

  return (
  <div  class='container  bg-white'>
    <div className='w-full justify-center mb-6 mx-auto'>
    <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-1  ">
      <div class=" w-full  md:w-96  md:h-80 lg:w-auto rounded-lg overflow-hidden  shadow-xl shadow-zinc-400  ">
        {/* image section */}
        
        <LazyLoad height={200} offset={100} once>
        
        <img
        
          class="w-full lg:w-full h-52"
          src={`/sreecars/Asset/${collection.img}`}
          alt={collection.brand}
          onClick={handleViewDetails} 
        />  </LazyLoad>

        <div class="card-body flex w-60   p-2">
          <h2 class="card-title  text-base"  >
            {collection.brand}
          </h2>

          {/* div for price */}
          <h3 class="flex  ml-44 lg:ml-64 w-40">
            <span>$</span> {collection.price}
          </h3>
        </div>
        <button class=" bg-gradient-to-r from-slate-300  to-gray-500 text-white w-full p-4 hover:-translate-y-2 transition-all duration-300" onClick={handleViewDetails}>
          View Details
        </button>
         {/* <button class="bg-black text-white w-full p-4 hover:bg-white hover:text-black transition-all duration-300 hover:border hover:border-slate-950 hover:-translate-y-2" onClick={handleViewDetails}>
          View Details
        </button> */}
      </div>
      </div>
    </div>
    </div>
   
  );
};


export const CollectionList = ({ collections }) => {
  const limitedCollections = collections.slice(0, 6);
  return (
    <>
      {limitedCollections.map((collection) => (
        <CollectionItem key={collection.id} collection={collections} />
      ))}
    </>
  );
};

// Add this export if it was intended to be used in NavCollection.jsx
export const Collections = CollectionItem;

 