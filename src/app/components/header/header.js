"use client"
import Image from "next/image";
import Link from "next/link";
import style from "../header/header.css"
import LogoPag from '/public/1.jpg'

import { BsSearch } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsList } from "react-icons/bs";


import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="img">
                <Image
                    src={LogoPag}
                    alt="logo"
                    className="logo"
                />
            </div>
            
            <nav className={menuOpen ? 'show' : ''}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Ecobags</a></li>
                    <li><a href="#">Promoções</a></li>
                    <li><a href="#">Porque Investir nas Ecobags?</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                </ul>
            </nav>

            <div className='headerIcons'>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <AiOutlineMenu />
                </button>
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
    );
}
