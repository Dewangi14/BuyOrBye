import React from 'react'
import { BsPerson } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";

const Navbar = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <div className="rounded-full bg-indigo-500 p-3">
     <BiSolidShoppingBags color="white" size={30}/>
     </div>
      <span className="ml-3 text-3xl font-bold">Buy<span className="text-indigo-600">Or</span>Bye</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900"><IoSearchOutline size={30}/></a>
      <a className="mr-5 hover:text-gray-900"><GoHeart size={30}/></a>
      <a className="mr-5 hover:text-gray-900"><BsPerson size={30}/></a>
    </nav>
  </div>
</header>
  )
}

export default Navbar