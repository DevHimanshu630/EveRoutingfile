import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from "./content.module.css"
import food from "../Images/food.png"
import { Link } from 'react-router-dom'

export default function Content() {
    const [btn,setbtn]=useState(false)
    const handlecontent=()=>{
        setbtn(!btn);
    }

    const selectfile=()=>{
        document.getElementById("myfile").click();
    }
    return (
        <>
        
            <div>
                <Header />
                <div className="down">
                    <div className="down-list">
                        <ul className="list2 abc">
                            <li ><Link to='/'style={{textDecoration:"none" ,color:"#7E7E7E"}}> Displays</Link></li>
                            <li className="display">My Content</li>
                            <li><Link to='/playlist' style={{textDecoration:"none" ,color:"#7E7E7E"}}>Playlists</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="bannerContainer"> */}
                <div className={styles.bannerContainer}>
                    <div className={styles.display_dash}>
                        <div className={styles.spanContainercont}>
                            <span>Display Dashboard</span>
                        </div>
                        <div className={styles.button_cont}>
                            <button className={`${styles.btndisplay} ${styles.blue}`} onClick={handlecontent} id="addcontent">+ ADD CONTENT</button>
                            <button className={`${styles.btndisplay} ${styles.brown}`}>Manage Content</button>
                        </div>

                    </div>

                    <div className={styles.show_displaycontainer}>
                        <div className={styles.showdisplayleft}>
                            <span className={styles.showdisplaycontent}>Show Content:</span>
                            <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Campagin Mode</button>
                            <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Mycompagin Mode</button>
                            <button className={`${styles.btndisplay} ${styles.brown} ${styles.compaginbtn}`}>Archived</button>
                        </div>

                        <div className={styles.showdisplayright}>
                            <span className={styles.sortbycontent}>Sort by:</span>
                            <select name="" id="" className={styles.optioncontainer}>
                                <option value="" className={styles.newestfirstcontent}>Newest first</option>
                            </select>
                        </div>

                    </div>
                    {/* popup coding start */}
                    <div className={styles.popup} style={{display:btn?"flex":"none"}}>
                        <div className={styles.contentcontainer}>
                            <div className={styles.mainheadingcontent}>
                                <p className={styles.mainheadingcontent_para}>add content</p>
                            </div>
                            <div className={styles.uploadfile_container}>
                                <div className={styles.uploadfile}>
                                    <p className={styles.uploadfile_content}>Upload Files</p>
                                </div>
                                <div className={styles.uploadfile}>
                                    <p className={styles.uploadfile_content}>Upload Web Content</p>
                                </div>
                            </div>
                            <div className={styles.bannercontent}>
                                <p>Add images, video and audio files, websites or HTML zip archives, HLS video streaming and MP3 audio streams</p>
                            </div>
                            <div className={styles.selectfilecontainer}>                                          
                                <div className={styles.parawithInputcontainer}>
                                    <p className={styles.selectfilepara}>Drag and drop your files</p>
                                    <p className={styles.selectfileor}>or</p>
                                    <div className={styles.myfile}>
                                        <label htmlfor="myfile" onClick={selectfile}>Select files</label>
                                        <input style={{ visibility: "hidden" }} type="file" id="myfile" name="myfile" multiple />
                                    </div>
                                </div>
                            </div> 
                            <div className={styles.btncontainer}>
                                <button className={styles.addbtn} id="Addbtn">Add</button>
                                <button className={styles.cancelbtn} onClick={handlecontent}>Cancel</button>
                            </div>
                        </div>                                          
                    </div>
                    {/* popup coding end cd */}
                    <div className={styles.productcontainer}>
                        <div className={styles.cardcontainer}>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={food} alt="" />
                                <div className={styles.cardcontent}>
                                    <h2 className={styles.cardcontentheading}>Food - Tacos</h2>
                                    <div className={styles.tempreature}>
                                        <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                            <span className={styles.slash}>\</span>
                                            <span className={styles.tempcontent}>105°F</span>
                                        </div>
                                        <p className={styles.oceanAirlinse}>Ocean Airlines Ad</p>
                                    </div>

                                </div>
                            </div>




                        </div>

                    </div>

                    <Footer />

                </div>

            </div>
        </>
    )
}
