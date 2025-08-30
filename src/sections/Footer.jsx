import React from 'react'
import { socialImgs } from '../constants/index.js'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="https://www.blogger.com/u/2/blog/posts/2937728120425692425?hl=en" target='_blank'>Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className='text-center md:text-end'>
            ©️{new Date().getFullYear()} Shashwat | Saxena . All Righs Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer