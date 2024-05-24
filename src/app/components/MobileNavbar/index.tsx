import Link from "next/link";
import { NavberArray,NavberItemType } from "../utils/NavberArrayAndTypes";

const MobileNavbar = () => {
 
  return (
  <main>

<div className="w-full text-center mt-36">


{
  NavberArray.map((item: NavberItemType,  index:number )=>(

    <li key={index} className=" lg:hidden list-none mt-6"> 
    <Link href={item.href}> {item.label }</Link>
    
    </li>
  ) )
}



</div>

  </main>
  );
};

export default MobileNavbar;
