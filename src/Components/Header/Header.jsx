import React, { useState } from 'react'
import logo from "../Images/everydoor.png"
import "./header.css"
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
    
  return (
    <div>
        <div className="header abc">
        <div className="navbar abc">
            <div className="logo">
                <img src={logo} alt="everydoor_logo"/>
            </div>
            <div className="left">
                <ul className="list abc">
                    <li><NavLink to='/advertiser'  className="textdecor"> Advertiser</NavLink></li>
                    <li ><NavLink to='/' className="textdecor"> Display Provider</NavLink></li>
                </ul>
            </div>
            <div className="center">
                <span>INR 17,050.00</span>
            </div>
            <div className="right">
                <span className="welcomecontent">Welcome</span>
                <select name="" id="">
                    <option value="">Jane1</option>
                    <option value="">Jane1</option>
                    <option value="">Jane3</option>
                    <option value="">Jane4</option>
                    <option value="">Jane5</option>
                    <option value="">Jane6</option>
                </select>
            </div>
        </div>

    </div>
    </div>
  )
}
