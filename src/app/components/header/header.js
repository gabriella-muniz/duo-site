import Image from "next/image";
import Link from "next/link";
import style from "../header/header.css"
import LogoPag from '/public/1.jpg'

import { BsSearch } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

export default function Header(){
    return(
        <header>
           
        <div className="img">
        <Image
               src={LogoPag}
               alt="logo"
               className="logo"
                />
      
         
         </div>
         
    

 
     <nav>
         <ul>
             <li>
                 <Link href='#'>Início</Link>
             </li>
             <li>
                 <Link href='#'>Ecobags</Link>
             </li>
             <li>
                 <Link href='#'>Promoções</Link>
             </li>
             <li>
                 <Link href='#'>Porque Investir nas Ecobags?</Link>
             </li>

             <li>
                 <Link href='#'>Sobre Nós</Link>
             </li>
         </ul>



         
     </nav>

     <div className='headerIcons'>
         <button>
             <BsSearch />
         </button>

         <div className='loginButton'>
             <button>
                 <BsPersonCircle />
                 <span>Fazer Login</span>
             </button>
         </div>
</div>
</header>
)
}
