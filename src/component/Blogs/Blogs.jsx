
import { useEffect } from "react";
import { useState } from "react";



const Blogs = () => {
    const [value, setValue] = useState([])
    console.log(value)
    useEffect(() => {
         fetch('blogs.json')
            .then(res => res.json())
            .then(data => setValue(data))
    },[])
    // const handleClick =(data)=>{
    //     const newValue = [...data, value]
    //     setValue(newValue)
    // }
    return (
        <div className="md:w-2/3">
          
           <h1 className="text-4xl">Blogs</h1>
        </div>
    );
};

export default Blogs;