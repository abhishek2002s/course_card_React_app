import NavBar from "./component/NavBar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useState } from "react";
import Spinner from "./component/Spinner";
import { FcAbout } from "react-icons/fc";


const App = () => {
  const [loading,setLoading] = useState(true);
  const [courses,setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
          let response = await fetch(apiUrl);
          let output  = await response.json();    
          setCourses(output.data);
          // console.log(output.data);
        }
    catch(error) {

   toast.error("prroblem in network please check it");
     }
     setLoading(false);
  }

       useEffect(()  => {
          fetchData();
       },[]);


      return(
        <div className="min-h-screen flex flex-col bg-bgDark2">
          <div>
            <NavBar/>
          </div>
          <div>
          <div className="bg-bgDark2">
          <div>
            <Filter 
            filterData ={filterData}
            category= {category}
            setCategory = {setCategory}

            />
          </div>
          <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]">
           {
            loading ? (<Spinner/>) : (<Cards courses = {courses} category ={category} />)
           }
          </div>
          </div>
    
        </div>
        </div>
      );
};

export default App;
