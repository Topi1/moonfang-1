import React, {useState} from 'react'
import "./Sidebar.css"
import logo2 from "../pictures/FangText.png"
import logo from "../pictures/FangLogo.png"
import menu from "../pictures/Hamburger.png"



export default function Sidebar() {

const [style, setStyle] = useState("sidebar");

const [show, setShow] = useState(true);

function handleClick() {

    if (style === "sidebar") {

        setStyle("sidebar2")}
    else {
        setStyle("sidebar")
    }


    setShow(!show);
   
}

  return (
    <div className={style}>

            <section className='logoSection'>

                {show ? (
                    <section className='sideBarOpenBtn' onClick={() => handleClick()}> <img src={menu} alt="" className='menuIcon'/> </section>
                ) : (
                    <section className='sideBarCloseBtn' onClick={() => handleClick()}>X</section>
                )}
                
                <img src={logo2} alt="" className='logo sidelogo'/>
            </section>

            
            <section className = "sidebarsection">
                <a href="" className='sidelink'> <img src={logo2} alt="" className='sidebaricon'/> {!show ? <p>SIGN IN / SIGN UP</p> :null}</a>
                <a href="" className='sidelink'> <img src={logo2} alt="" className='sidebaricon'/> {!show ? <p>NEWS</p> :null}</a>
                <a href="" className='sidelink'> <img src={logo2} alt="" className='sidebaricon'/> {!show ? <p>GAMES</p> :null}</a>
                <a href="" className='sidelink'> <img src={logo2} alt="" className='sidebaricon'/> {!show ? <p>CONTACT</p> :null}</a>
            </section>

            <footer className='sideFooter'></footer>
    </div>
  )
}
