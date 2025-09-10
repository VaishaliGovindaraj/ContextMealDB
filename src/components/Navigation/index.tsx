import { NavItems } from "@/data/Navitems"
import Link from "next/link"

const Navigation = ( ) => {
    return(
        <>
        {NavItems.map((item,index) => 
            <Link className="text-white" key={index} href={item.link}>{item.name}</Link> 
        )}
        </>

     
    )
}

export default Navigation