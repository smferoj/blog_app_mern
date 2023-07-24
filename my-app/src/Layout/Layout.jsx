import { useEffect, useState } from "react";
import { postCategories } from "../apiRequest/ApiRequest";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            let res = await postCategories();
            setCategories(res);
          } catch (error) {
            // Handle any errors if necessary
            console.error("Error fetching categories:", error);
          }
        };
        fetchData();
      }, []);

  return (
    <div>
      <div className="navbar fixed z-50 top-0 shadow-lg  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                
          <li><NavLink to={"/"}>  হোম </NavLink> </li>
             {
                categories.map((item, index)=>{
                     return<li key={index}><NavLink to={"/byCategory/"+ item['id']}>{item.name}</NavLink> </li>
                })
             }

             
            </ul>
          </div>


          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to={"/"}>  হোম </NavLink> </li>
          {
                categories.map((item, index)=>{
                    return<li key={index}><NavLink to={"/byCategory/"+ item['id']}>{item.name}</NavLink> </li>
                })
             }
        
          </ul>
        </div>
       
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
