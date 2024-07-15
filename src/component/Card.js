import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let setLikedCourses = props.setLikedCourses;
  let LikedCourses = props.LikedCourses;

function clickHandler(){
if(LikedCourses.includes(course.id)){
  //check kr rhe hai ki phle se liked toh nhi hai
  setLikedCourses( (prev) => prev.filter( (cid) => (cid != course.id)))
  toast.warning("liked rmoved");
}


else{
  //phle se liked nhi hai ye course
  //insert krna hai ye course liked course me
  if(LikedCourses.length == 0) {
       setLikedCourses([course.id]);
  }


  else{
      //non-empty phle se
      setLikedCourses((prev) => [...prev,course.id]);
  }


  toast.success("Liked Successfully"); 
     }
}



  return(
    <div className="w-[300px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden h-[320px]">
 <div className="relative">
     <img src={course.image.url}/>
    
     <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
        <button onClick={clickHandler}>
        {
          LikedCourses.includes(course.id) ? (<FcLike fontSize="1..75rem" />)  :
          (<FcLikePlaceholder fontSize="1.75rem" />)
         
        }
        </button>
     </div>
     </div>

     <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
        {
          course.description.length >100 ? 
          (course.description.substr(0,100)) + "..." : 
          (course.description)
          }
        </p>
     </div>


    </div>
   
  );
};

// export default Card;
export default Card;