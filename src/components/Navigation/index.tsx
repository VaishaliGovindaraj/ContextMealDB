import { NavItems } from "@/data/Navitems"
import Link from "next/link"

const Navigation = () => {
    return (
     <div className="flex justify-evenly items-center w-full shadow-md p-4">
  {NavItems.map((item, index) => 
    <Link 
      key={index} 
      href={item.link} 
      className="text-gray-800 font-medium hover:text-orange-600 transition-colors duration-200"
    >
      {item.name}
    </Link>
  )}
</div>



    )
}

export default Navigation