import React from "react";
const Gallary = ()=>{
    const image = "https://images.pexels.com/photos/6941091/pexels-photo-6941091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const image2 = "https://images.pexels.com/photos/7156099/pexels-photo-7156099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const image3 = "https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    return(
        <>
       
        <h1 className="heading">Image Gallary</h1>
       
        <div className="img_div">
         <img src={image} alt="randomImage"/>
         <img src={image2} alt="randomImage"/>
         <img src={image3} alt="randomImage"/>
         </div>
         

        </>
    );
}
export default Gallary;