import React from "react";
import { NavLink } from "react-router-dom";
import silverShopimg from "../assets/picture/62bae0e36e541479378535.png"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useSelector } from "react-redux";



const Header = () => {

  const productbasket = useSelector(state => state.cart)

  const uniqueBasket = productbasket.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );


  return (
    <>
      <div className="px-[50px] flex max-[411px]:px-4 justify-between">
        <div className="flex gap-5 items-center w-1/2 ">
          <img className="w-20" src={silverShopimg} alt="" />
          <input className="w-3/4 max-[800px]:w-full max-[650px]:hidden h-12 rounded-xl  outline-none bg-[#F5F5F5] px-4" type="text" placeholder="جستجو" />

        </div>

        <div className="flex gap-4  items-center ">
          <button className="px-7 py-3 bg-[#f01436] max-[480px]:px-3 hover:bg-[#780a1b]/[0.9] transition-all duration-300 text-white rounded-xl">ورود / ثبت نام </button>
          <NavLink to={"/basket"} className="cursor-pointer relative">
            <LocalGroceryStoreIcon color="action" />
            {
              uniqueBasket.length !== 0 ?
              <div className="flex items-center justify-center w-6 h-6 rounded-md absolute -bottom-3 -left-3  bg-[#f01436]">
                <p className="text-white">
                  {
                    uniqueBasket.length ? uniqueBasket.length : null 
                  }
                </p>
              </div>
              :
              null
            }

          </NavLink>

        </div>



      </div>

      <div className="w-full h-16 border-b-2 border-gray-400/[0.2]  flex gap-4 px-[50px] items-center">
        <NavLink className="font-bold hover:text-[#f01436] transition-all duration-300 text-base" to={"/home"}>خانه</NavLink>

        <NavLink className="font-bold hover:text-[#f01436] transition-all duration-300 text-base" to={"/basket"}>سبد خرید</NavLink>


      </div>

    </>
  );
}

export default Header;