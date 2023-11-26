import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { NavLink } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';

import LoadingHome from "./LoadingHome";



const Home = () => {

  const [products, setProducts] = useState(null)
  const [pageApi, setPageApi] = useState(1);
  const [countpage, setCountpage] = useState(12)
  const [loadingpage, setLoadingpage] = useState(false)
  const [handleloading, setHandleloading] = useState([1, 2, 3, 4, 5, 6])


  console.log(loadingpage)

  console.log(products)
  const fetchListProducts = async () => {
    setLoadingpage(true)
    // const url = `https://api.hexarz.com/v1/api/manage/admin/users/list?page=${first}` ;
    const config = {
      method: "POST",
      url: "https://imis.silverage.co/api/shop/products/search",
      params: {
        search_key: "",
        group_depth: 2,
        load_products: 2,
        load_group: 1,
        per_page: 12,
        page: pageApi
      }
    };

    try {
      const response = await axios(config);
      setLoadingpage(false)

      setProducts(response.data.results.products)
      setCountpage(response.data.results.paginate_for_products.last_page)


    } catch (error) {
      console.log(error.toString());
      // Handle error
    }
  };

  useEffect(() => {
    fetchListProducts()
  }, [pageApi])








  return (
    <>
      <div className="flex mt-10 gap-5 px-[50px] ">
        <div className="w-3/12 max-[1000px]:w-0  max-[1000px]:hidden h-96">
          <div className="flex justify-between ">
            <p className="">فیلتر ها</p>
            <p className="text-[#f01436]"> حذف فیلتر ها</p>
          </div>

        </div>



        <div className="w-9/12 max-[1000px]:w-full  h-96 ">
          <div className="w-full  bg-[#F5F5F5] h-20 rounded-xl flex items-center ps-4">
            <p className="text-[#8A8A8A]">مرتب سازی بر اساس:</p>



          </div>

          <div className="flex gap-5 mt-8 flex-wrap justify-between">


            {



              products && loadingpage == false ?
                products.map((item, index) =>
                (
                  <NavLink to={`/home/${item.id}`} key={index} className="w-[31%] max-[780px]:w-[47%] max-[550px]:w-full  flex justify-between mt-5 flex-col pb-2 relative rounded-xl border-[1px] border-gray-400/[0.5]">

                    {
                      item.full_price.discount_percent ?

                        <div className="w-full flex justify-end absolute top-0 end-0">
                          <div className="bg-[#f01436] w-20 h-10 flex items-center justify-center text-white font-bold text-xl rounded-tl-xl rounded-br-xl ">
                            {item.full_price.discount_percent}%
                          </div>

                        </div> :
                        null
                    }
                    <div className="">
                      <img className="rounded-t-xl" src={item.cover} alt="" />
                    </div>
                    <p className="font-medium text-lg px-2 mt-4 ">{item.name}</p>
                    <div className="flex justify-between px-2 mt-2">
                      {
                        item.full_price.discount_percent ?
                          <p className="font-medium line-through ">{item.full_price.sale_price.toLocaleString()} ریال</p> :
                          <p className="font-medium">{item.full_price.sale_price.toLocaleString()} ریال</p>
                      }
                      {
                        item.full_price.discount_percent ?
                          <p className="text-[#f01436] ">
                            {item.full_price.sale_price_with_tax_and_discount.toLocaleString()} ریال
                          </p> :
                          null

                      }

                    </div>
                    <p className="px-2 font-medium mt-2">
                      <StorefrontIcon />
                      فروشگاه مرکزی
                    </p>

                  </NavLink>

                )
                ) :
                handleloading.map((item, index) =>
                (

                 <LoadingHome />
                )



                )


            }





          </div>




          <div className="py-10 w-full flex justify-center">



            <Stack spacing={2}>
              <Pagination
              
                variant="outlined" shape="rounded"
                onChange={(e, value) => setPageApi(value)}
                onClick={() => window.scrollTo(0, 0)}
                count={countpage}
                renderItem={(item) => (
                  <PaginationItem
                  sx={{background:"#F01436" , color:"white"}}
                  className="hover:text-black after:text-black before:text-black text-black"

                    slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>

          </div>












        </div>

      </div >


    </>
  );
}

export default Home;