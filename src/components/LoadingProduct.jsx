import React from 'react';
import Skeleton from '@mui/material/Skeleton';



const LoadingProduct = () => {



  return (
    <>
      <div className='flex justify-center max-[600px]:flex-col max-[600px]:items-center px-6'>

<div className='w-4/12 max-[600px]:w-full max-[1050px]:w-1/2 flex flex-col mt-5'>
  <div className='w-full  flex justify-center '>
    <Skeleton className='rounded-md' variant="rectangular" height={"270px"} width={"55%"} sx={{ fontSize: '1.5rem' }} />
  </div>

  <div className='flex gap-4 w-full mt-5 px-2 justify-center '>

    <div className={`mt-5 w-20 h-20 rounded-xl cursor-pointer `}>
      <Skeleton className='rounded-xl' variant="rectangular" height={"100%"} width={"100%"} sx={{ fontSize: '1.5rem' }} />

    </div>
    <div className={`mt-5 w-20 h-20 rounded-xl cursor-pointer `}>
      <Skeleton className='rounded-xl' variant="rectangular" height={"100%"} width={"100%"} sx={{ fontSize: '1.5rem' }} />

    </div>
    <div className={`mt-5 w-20 h-20 rounded-xl cursor-pointer `}>
      <Skeleton className='rounded-xl' variant="rectangular" height={"100%"} width={"100%"} sx={{ fontSize: '1.5rem' }} />

    </div>

  </div>

</div>





<div className='w-8/12 max-[1050px]:w-1/2 max-[600px]:w-full h-96 gap-3 flex flex-col '>
  <div className='w-full mt-4'>
    <p className='text-xl font-medium'>
      <Skeleton variant="text" width={"300px"} sx={{ fontSize: '1.5rem' }} />

    </p>


  </div>

  <div className='flex w-full gap-2 '>

    <div className='w-8/12 max-[1050px]:w-full flex flex-col ps-2 border-t-[1px] border-gray-400/[0.5] h-96 gap-2 '>
      <p className='mt-2 '>
        <Skeleton variant="text" width={"80px"} sx={{ fontSize: '1.5rem' }} />

      </p>
      <p className='font-bold text-xl '>
        <Skeleton variant="text" width={"80px"} sx={{ fontSize: '2rem' }} />

      </p>


      
         
          <Skeleton variant="circular" width={"40px"} height={"40px"} />

    


      <p className='mt-3 font-medium text-xl '>
      <Skeleton variant="rectangular" width={"50px"} height={"20px"} />
      </p>


      <div className='flex gap-2 mt-2 flex-col font-medium text-base'>
        <Skeleton variant="rectangular" width={"80px"} height={"20px"} />
      </div>
      <div className='flex gap-2 mt-2 flex-col font-medium text-base'>
        <Skeleton variant="rectangular" width={"90px"} height={"20px"} />
      </div>
      <div className='flex gap-2 mt-2 flex-col font-medium text-base'>
        <Skeleton variant="rectangular" width={"100px"} height={"20px"} />
      </div>
      <div className='flex gap-2 mt-2 flex-col font-medium text-base'>
        <Skeleton variant="rectangular" width={"110px"} height={"20px"} />
      </div>




    </div>
    <div className='w-4/12 flex max-[1050px]:hidden  flex-col bg-[#f7f7f7] border-2 rounded-md border-[#E0E0E2] p-5 '>
      <p className=''>
        <Skeleton variant="text" width={"80px"} sx={{ fontSize: '1.5rem' }} />

      </p>
      <div className='flex gap-2 mt-4'>
      <Skeleton variant="rectangular" width={"90px"} height={"20px"} />

      </div>
      <Skeleton variant="rectangular mt-2" width={"110px"} height={"20px"} />
      <div className='w-full h-[1px] mt-8 bg-[#81858b]/[0.4] '></div>
      <Skeleton variant="rectangular" className='mt-5' width={"100%"} height={"20px"} />
      <div className='w-full h-[1px] mt-4 bg-[#81858b]/[0.4] '></div>

      <div className='w-full mt-2'>

        <div className='flex justify-end gap-1 '>
          
          <div>
          
          </div>
        </div>


        <p className='flex justify-end mt-5'>
          <Skeleton variant="text" width={"60%"} sx={{ fontSize: '1.5rem' }} />

        </p>

      </div>



      <Skeleton className='mt-8' variant="rectangular" width={"100%"} height={"40px"} />



    </div>
  </div>



</div>

</div>
    </>
  );
}

export default LoadingProduct;