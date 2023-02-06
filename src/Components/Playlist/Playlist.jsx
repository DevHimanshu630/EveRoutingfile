import React, { useState } from 'react'
import "./playlist.css"
import food1 from "../Images/food1.png"
import vector from "../Images/Vector.png"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
export default function Playlist() {
    const [btn,setbtn]=useState(false)
    const handleplaylist=()=>{
        setbtn(!btn);
    }
  return (
    <div>
         <main>
        <Header/>
        <div>
            <div class="down">
                <div class="down-list">
                    <ul class="list2 abc">
                        <li><Link to='/' style={{textDecoration:"none" ,color:"#7E7E7E"}}>Displays</Link></li>
                        <li><Link to='/content' style={{textDecoration:"none" ,color:"#7E7E7E"}}>My Content</Link></li>
                        <li class="display">Playlists</li>
                    </ul>
                </div>
            </div>
            <div class="bannerContainer">

                <div class="display-dash abc">
                    <div class="spanContainercont">
                        <span class="span-content">My Playlists</span>
                    </div>
                    <div class="button-cont">
                        <button class="btndisplay blue" onClick={handleplaylist}>+ ADD A PLAYLIST</button>
                    </div>

                </div>

                {/* playlist popup start */}

                <div className="popup" style={{display:btn?"flex":"none"}}>
                    <div className="contentcontainer">
                        <div className="mainheadingcontent flex">
                            <p className="mainheadingcontent-para flex">Add a display</p>
                        </div>
                        <p className="playlist-para">Create playlists, change order and duration of items, add triggers and widgets to your playlists</p>
                        <input type="text" class="playlist-text" placeholder="Enter playlist name"/>
                        <div className="btncontainer flex">
                            <button className="addbtn" id="Addbtn">Add</button>
                            <button className="cancelbtn" onClick={handleplaylist}>Cancel</button>
                        </div>
                    </div>
                </div>

                    
                {/* playlist popup coding end */}

                <div class="productcontainer">
                    <div class="cardcontainer abc">
                        <div class="playlistimgcontainer">
                            <img class="playlistimg" src={food1} alt="" srcset=""/>
                        </div>
                        <div class="playlistheading abc">
                            <p class="playlistheadingpara">Beta Testing</p>
                            <img class="vectorimg" src={vector} alt=""/>
                        </div>
                        <div class="testingbtncontainer abc">
                            <div class="testingbtn abc">
                                <p class="testingbtnpara1">screen:0</p>
                            </div>
                            <div class="testingbtn abc">
                                <p class="testingbtnpara">Widgets:0</p>
                            </div>
                            <div class="testingbtn lg-width abc">
                                <p class="testingbtnpara">Total Time: 00:04:50</p>
                            </div>
                        </div>

                    </div>
                    <div class="cardcontainer abc">
                        <div class="playlistimgcontainer">
                            <img class="playlistimg" src={food1} alt="" srcset=""/>
                        </div>
                        <div class="playlistheading abc">
                            <p class="playlistheadingpara">Beta Testing</p>
                            <img class="vectorimg" src={vector} alt=""/>
                        </div>
                        <div class="testingbtncontainer abc">
                            <div class="testingbtn abc">
                                <p class="testingbtnpara1">screen:0</p>
                            </div>
                            <div class="testingbtn abc">
                                <p class="testingbtnpara">Widgets:0</p>
                            </div>
                            <div class="testingbtn lg-width abc">
                                <p class="testingbtnpara">Total Time: 00:04:50</p>
                            </div>
                        </div>

                    </div>
                    <div class="cardcontainer abc">
                        <div class="playlistimgcontainer">
                            <img class="playlistimg" src={food1} alt="" srcset=""/>
                        </div>
                        <div class="playlistheading abc">
                            <p class="playlistheadingpara">Beta Testing</p>
                            <img class="vectorimg" src={vector} alt=""/>
                        </div>
                        <div class="testingbtncontainer abc">
                            <div class="testingbtn abc">
                                <p class="testingbtnpara1">screen:0</p>
                            </div>
                            <div class="testingbtn abc">
                                <p class="testingbtnpara">Widgets:0</p>
                            </div>
                            <div class="testingbtn lg-width abc">
                                <p class="testingbtnpara">Total Time: 00:04:50</p>
                            </div>
                        </div>

                    </div>
                    <div class="cardcontainer abc">
                        <div class="playlistimgcontainer">
                            <img class="playlistimg" src={food1} alt="" srcset=""/>
                        </div>
                        <div class="playlistheading abc">
                            <p class="playlistheadingpara">Beta Testing</p>
                            <img class="vectorimg" src={vector} alt=""/>
                        </div>
                        <div class="testingbtncontainer abc">
                            <div class="testingbtn abc">
                                <p class="testingbtnpara1">screen:0</p>
                            </div>
                            <div class="testingbtn abc">
                                <p class="testingbtnpara">Widgets:0</p>
                            </div>
                            <div class="testingbtn lg-width abc">
                                <p class="testingbtnpara">Total Time: 00:04:50</p>
                            </div>
                        </div>

                    </div>
                    <div class="cardcontainer abc">
                        <div class="playlistimgcontainer">
                            <img class="playlistimg" src={food1} alt="" srcset=""/>
                        </div>
                        <div class="playlistheading abc">
                            <p class="playlistheadingpara">Beta Testing</p>
                            <img class="vectorimg" src={vector} alt=""/>
                        </div>
                        <div class="testingbtncontainer abc">
                            <div class="testingbtn abc">
                                <p class="testingbtnpara1">screen:0</p>
                            </div>
                            <div class="testingbtn abc">
                                <p class="testingbtnpara">Widgets:0</p>
                            </div>
                            <div class="testingbtn lg-width abc">
                                <p class="testingbtnpara">Total Time: 00:04:50</p>
                            </div>
                        </div>

                    </div>
                    
                    
                </div>

                <hr style={{border:"1px solid #C9C9C"}}/>
                <Footer/>
            </div>

        </div>

    </main>
    </div>
  )
}
