import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react";
import { postByCategory } from "../apiRequest/ApiRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";


const ByCategoryPage = () => {

  const {categoryID} = useParams(); 
  // alert(categoryID);

  let [list, setList] = useState(null);

  useEffect(()=>{
  
    (async()=>{
    
      let res = await postByCategory(categoryID);
      setList(res);

    })()

  }, [categoryID])
  return (
     <Layout>
     {list === null ? <Loader/>: <BlogList list={list}/> 
      }   
     </Layout>
  )
}

export default ByCategoryPage