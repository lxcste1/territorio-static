"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import openMenu from '../../../public/assets/openMenu.png'
import closeMenu from '../../../public/assets/closeMenu.png'

export default function Header() {

  const Links = [
    { name: "Servicios", link: "/servicios" },
    { name: "Sobre nosotros", link: "/sobre-nosotros" }
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className={`bg-white sticky top-0`}>
      <div className={`max-w-6xl px-4 md:px-0 mx-auto flex justify-between items-center h-20`}>
        <div>
          <Link href="/" className={`flex items-center`}>
            <img
              alt=""
              src="https://via.placeholder.com/50x50"
              width="50"
              height="50"
              className={`rounded-full`}
            />
            <p className={`font-bold text-2xl px-2`}>Territorio Bohemian</p>
          </Link>
        </div>
        <div className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden`}>
          <button onClick={() => setOpen(!open)} type="button" className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}>
            {open ?
              <Image
                src={closeMenu}
                alt={`Cerrar menú`}
                width={30}
                height={30}
              /> :
              <Image
                src={openMenu}
                alt={`Abrir menú`}
                width={30}
                height={30}
              />}
          </button>
        </div>
        <ul className={`${open ? `top-[-45px] opacity-100` : `top-[-490px]`} md:opacity-100 opacity-0 bg-white md:flex md:items-center md:pt-0 pt-32 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-[4.25rem] md:pb-0 pb-4 transition-all duration-500 ease-in`}>
          {
            Links.map((link) => (
              <li key={link.name} className={`px-1`}>
                <a href={link.link} className={`hover:text-amber-950`}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

