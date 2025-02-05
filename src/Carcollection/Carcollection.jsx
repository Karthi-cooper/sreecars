
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

// export const CollectionList = ({ collections }) => {
//   const limitedCollections = collections.slice(0, 6);
//   return (
//     <>
//       {limitedCollections.map((collection) => (
//         <CollectionItem key={collection.id} collection={collection} />
//       ))}
//     </>
//   );
// };

// // Add this export if it was intended to be used in NavCollection.jsx
// export const Collections = CollectionItem;




import React from 'react'
 import '../Carcollection/Car.css';
 import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';

function  Carcollection({Data}) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/sreecars/Product/${Data.id}`);
  };
  return ( 
  
    
 <div   id='swiper-slide '>
  <LazyLoad height={200} offset={100} once>
  <img 
         className="m-2   "
         src={`/sreecars/Asset/${Data.img}`}
         alt={Data.brand} 
         onClick={handleViewDetails}   />

         </LazyLoad>

         <div className='items-center  justify-center '>
          <h2 className="card-title text-center items-center  text-black ">
           {Data.brand}
          </h2>

            <button className='view-more-btn  
             ml-28 bg-gradient-to-r from-slate-700  
              to-slate-200
              text-black
               p-2
               mb-2 rounded-lg
               ' 
             onClick={handleViewDetails}>
             View More
             </button>
        </div>
 </div>
 
)
};
 
export default Carcollection;



 
