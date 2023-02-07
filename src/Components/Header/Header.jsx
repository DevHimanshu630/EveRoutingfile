import React from 'react'
import logo from "../Images/everydoor.png"
import "./header.css"
export default function Header(props) {
  return (
    <div>
        <div class="header abc">
        <div class="navbar abc">
            <div class="logo">
                <img src={logo} alt="everydoor_logo"/>
            </div>
            <div class="left">
                <ul class="list abc">
                    <li>Advertiser</li>
                    <li class="display-provider">Display Provider</li>
                </ul>
            </div>
            <div class="center">
                <span>INR 17,050.00</span>
            </div>
            <div class="right">
                <span class="welcomecontent">Welcome</span>
                <select name="" id="">
                    <option value="">Jane</option>
                </select>
            </div>
        </div>

    </div>
    </div>
  )
}
