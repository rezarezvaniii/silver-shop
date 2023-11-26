import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const LoadingHome = () => {
    return ( 
        <>
        <div className="w-[31%] max-[550px]:w-full max-[780px]:w-[47%] flex justify-between flex-col mt-5  relative rounded-xl border-[1px] border-gray-400/[0.5]">

<div className="w-full flex justify-end absolute">
  <Skeleton className="rounded-tl-xl rounded-br-xl" variant="rectangular" width={80} height={35} />

</div>
< div className="flex flex-col justify-between pb-6">

  <Stack spacing={1}>

    <Skeleton className="rounded-t-xl" width={"100%"} height={230} variant="rectangular" />

    <div className="px-2">
      <Skeleton variant="text" width={"60%"} sx={{ fontSize: '1.5rem' }} />

    </div>

    <div className="flex justify-between px-2">
      <Skeleton variant="text" width={"40%"} sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" width={"35%"} sx={{ fontSize: '1.5rem' }} />

    </div>
    <div className="px-2">
      <Skeleton variant="text" width={"40%"} sx={{ fontSize: '1.5rem' }} />

    </div>

  </Stack>

</div>
</div>
        </>
     );
}
 
export default LoadingHome;