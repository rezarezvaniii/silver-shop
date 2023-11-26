import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { addToCart } from './cartSlice';
import { removeFromCart } from './cartSlice';



const Basket = () => {




  const [activeTab, setActiveTab] = useState(0);

  

  const handleTabClick = (index) => {
    setActiveTab(index);
    window.scrollTo(0, 0); // صفحه را به بالا اسکرول کنید
  };


  const buybasket = useSelector(state => state.cart)

  const totalPrice = buybasket.reduce((sum, product) => sum + product.full_price.sale_price, 0);
  
  const uniqueBasket = buybasket.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );


  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

   const handleRemoveFromCart = (id) => {
     dispatch(removeFromCart(id));
     console.log("this si  a id :",id)
  };



  return (
    <>

      <div className='flex flex-col w-full gap-10 px-20 '>


        <div className='flex gap-10 border-b-[1px] '>
          <button className='relative w-20 h-10' onClick={() => handleTabClick(0)}> سبد خرید{activeTab === 0 && <div className={`   bottom-0 w-full h-1 rounded-t-2xl bg-red-500 absolute`}></div>}</button>
          <button className='relative w-28 h-10' onClick={() => handleTabClick(1)}> خریدهای بعدی{activeTab === 1 && <div className={`   bottom-0 w-full h-1 rounded-t-2xl bg-red-500 absolute`}></div>}</button>
        </div>

        <div className='flex gap-4 w-full '>


          <div className='w-9/12  rounded-lg flex flex-col gap-6 border-[1px] border-[#81858b]/0.4 h-fit'>
            <div className='p-4'><p>سبد خرید شما</p></div>


            {
              uniqueBasket.length === 0 ?
              <p className='text-[#f01436] bg-red pb-5'>هیچ محصولی یافت نشد</p>
              :
              uniqueBasket.map((item , index)=>
              (
                <div key={index} className='flex gap-2 w-full p-4 border-b-[1px] border-[#81858b]/0.4 '>
              <div className='w-3/12 flex items-center flex-col gap-4'>
                <img className='w-3/4 rounded-lg' src={item.cover} alt="" />
                <div className='w-20 h-10 rounded-md border-[1px] border-[#81858b]/[0.4] items-center justify-between  flex shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)]'>
                  <button onClick={()=>handleAddToCart(item)}><AddIcon color='success' /></button>
                  <p>{buybasket.filter(e => e.id == item.id).length}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}><DeleteIcon color='error' /></button>
                </div>
              </div>

              <div className='w-8/12'>
                <p >{item.name}</p>
                <p className='text-[#62666d] text-base font-normal mt-3 '>مشکی</p>
                <p className='text-[#62666d] text-base font-normal mt-3 '>گارانتی اصالت و سلامت فیزیکی کالا</p>
                <p className='text-[#62666d] text-base font-normal mt-3 '>شرکت چرم مشهد</p>
                <p className='text-[#62666d] text-base font-normal mt-3 '>موجود در انبار فروشند</p>
                <p className='mt-3 text-base font-semibold'>{item.full_price.sale_price} تومان</p>
              </div>

            </div>
              )) 
            }

            
            


          </div>


          <div className='w-3/12 rounded-lg h-fit border-[1px] flex flex-col gap-6 border-[#81858b]/0.4 p-8'>
            <div className='flex justify-between '>
              <p className='text-[#62666d]'>قیمت کالاها (۲)</p>
              <p>{totalPrice.toLocaleString()} تومان</p>
            </div>
            <div className='flex justify-between '>
              <p className='text-[#62666d]'>جمع سبد خرید</p>
              <p>{totalPrice.toLocaleString()} تومان</p>
            </div>
            <div className='flex justify-between text-[#ef4056]'>
              <p>سود شما از خرید</p>
              <p>۰ تومان</p>
            </div>
            <button className='w-full mt-4 rounded-md bg-[#EF4056] text-white py-2'>ثبت سفارش</button>
          </div>

        </div>
      </div>



    </>
  );
}

export default Basket;