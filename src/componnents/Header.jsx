import React, { useState } from 'react';
import { useColorStore } from './store/zuStand';
import style from "./style.module.css"

export default function Header() {
  const setColor = useColorStore((state) => state.setColor);
  const color = useColorStore((state) => state.color);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const Links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];
  return (
    <header className=' bg-slate-700 text-yellow-400  h-16  flex items-center '
      style={{ color: color }}>

      <div className='flex gap-12 items-center justify-start px-5 mx-auto'>
        {Links.map((link, index) => {
          return (
            <a href={link.href} key={index} className='hover:text-yellow-300 font-medium	'  >{link.name}</a>
          )
        })}
        <input type="color" value={color} onChange={handleColorChange} />
        <div className={style.gpt}></div>
      </div>
    </header>
  )
}
