import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
            <section className="sideBarCloseBtn sideBtn">X</section>
            
            
            <section className = "sidebarsection">
                <a href="">SIGN UP</a>
                <a href="">SIGN IN</a>
                <a href="">CONTACT</a>
                <a href="">TEAM</a>
            </section>
    </div>
  )
}
