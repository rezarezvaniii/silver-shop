import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Basket = () => {


  const [activeTab, setActiveTab] = useState(0);




  const handleTabClick = (index) => {
    setActiveTab(index);
    window.scrollTo(0, 0); // صفحه را به بالا اسکرول کنید
  };


  const buybasket = useSelector(state => state.cart)

  console.log(buybasket)


  return (
    <>

      <div className='flex gap-10 border-b-[1px] '>
        <button className='relative w-20 h-10' onClick={() => handleTabClick(0)}> سبد خرید{activeTab === 0 && <div className={`   bottom-0 w-full h-1 rounded-t-2xl bg-red-500 absolute`}></div>}</button>
        <button className='relative w-28 h-10' onClick={() => handleTabClick(1)}> خریدهای بعدی{activeTab === 1 && <div className={`   bottom-0 w-full h-1 rounded-t-2xl bg-red-500 absolute`}></div>}</button>
      </div>


      <div className='flex w-full gap-4'>
        <div className='w-8/12'>
          
        </div>
        <div className='w-4/12'>

        </div>

      </div>



    </>
  );
}

export default Basket;