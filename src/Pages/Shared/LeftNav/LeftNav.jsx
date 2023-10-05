
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [catagories,setCatagories]=useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(rcs=>rcs.json())
        .then(data=>setCatagories(data))
    },[])
    console.log(catagories);
    return (
        <div>
           <h1>All Caterogy:{catagories.length}</h1>
           <h1 className="text-xl font-bold bg-slate-300 w-2/3 p-3 my-4">National News</h1>
           <div>
           {
            catagories.map(catagorie=>
                <Link className="block text-lg py-2" key={catagorie.id}>{catagorie.name}</Link>
            )
           }
           </div>
        </div>
    );
};

export default LeftNav;