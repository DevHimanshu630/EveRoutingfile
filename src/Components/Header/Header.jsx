import React from 'react'
import logo from "../Images/everydoor.png"
import "./header.css"
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <div class="header abc">
        <div class="navbar abc">
            <div class="logo">
                <img src={logo} alt="everydoor_logo"/>
            </div>
            <div class="left">
                <ul class="list abc">
                    <li class="display-provider"><Link to='/advertiser' style={{textDecoration:"none",color:"black"}}> Advertiser</Link></li>
                    <li class="display-provider"><Link to='/' style={{textDecoration:"none",color:"black"}}> Display Provider</Link></li>
                </ul>
            </div>
            <div class="center">
                <span>INR 17,050.00</span>
            </div>
            <div class="right">
                <span class="welcomecontent">Welcome</span>
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
