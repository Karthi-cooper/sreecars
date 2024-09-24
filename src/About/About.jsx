// import React from 'react';
// import ferr from '../Asset/ferr.mp4';

// export default function About() {
//   return (
//     <div class="container">
//     <div class="flex flex-shrink items-center justify-center">

//    <div className=' w-9/12  items-center justify-center grid-cols-1 order-1 md:grid-cols-2 lg:grid-cols-3'>
//      <video className='m-20 w-96' src = {ferr} muted loop autoPlay ></video>
//      </div>
//       <div class=" grid-cols-1 order-2 md:grid-cols-2 lg:grid-cols-3">
//          <button className='cursor-pointer hover:bg-purple-500'> Hi ninja</button>
//          <h1 className='text-black'>hi this is ninja group from sgcarsas</h1>
//       </div>
//     </div>
//   </div>
  
//   )
// }

{/* <div className="z-[-1] relative">
  <div className=" lg:flex-1 p-2">
    <img className="w-full h-72 lg:h-full object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAa7C3MYFz9dkUaT_Du5yt2nInEOcOm44cLRVj3QLZ_z7k9-SyNMevg-JfUIEQhF_86Q&usqp=CAU" alt="" />
    <div class="absolute inset-0 flex flex-wrap items-center justify-center">
      <h1 class="bg-white text-black">SGCars is a specialized platform dedicated to connecting buyers and sellers of second-hand cars. Our mission is to provide a trustworthy and efficient marketplace where users can browse, compare, and purchase pre-owned vehicles with confidence. We offer a wide range of cars from various brands, ensuring that our customers have access to high-quality options that fit their budget and preferences. With a user-friendly interface, detailed vehicle information, and secure transaction processes, SGCars simplifies the car buying experience, making it easier and more convenient to find the perfect car</h1>
    </div>
  </div>
</div> */}


{/* <video
className="w-1/2  h-1/2 md:h-3/4 object-cover rounded-lg"
src={sgcars}
loop autoPlay muted
>
</video> */}

import React from 'react';
import sgcars from '/Asset/sgcar.mp4';


export default function About() {
  return (
    <div className='z-[-1]    bg-blend-overlay	my-10 relative p-5'>
      <h1 className='text-center justify-center  text-2xl font-semibold text-black'>About Us</h1>
     
     <div className=  'm-5 flex flex-col lg:flex-row  '> 
   
      <video
       className="w-full lg:w-1/2 lg:m-5 h-1/2 md:h-3/4 object-cover rounded-lg"
       src={sgcars}
       loop autoPlay muted playsInline
     >
     </video>
   <div className='flex-wrap   lg:w-1/3 space  lg:ml-20 mt-6'>
    <h1 class="text-black text-xl  leading-7 text-center"> Our mission is to provide a trustworthy and efficient marketplace where users can browse, compare, and purchase pre-owned vehicles with confidence. We offer a wide range of cars from various brands, ensuring that our customers have access to high-quality options that fit their budget and preferences. With a user-friendly interface, detailed vehicle information, and secure transaction processes, SGCars simplifies the car buying experience, making it easier and more convenient to find the perfect car</h1>
    </div>
    </div>
  </div>
  
  
  )
}

