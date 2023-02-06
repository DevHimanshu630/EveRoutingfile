import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from "./Dashboard.module.css"
import img from "../Images/img.png"
import { Link } from 'react-router-dom'
export default function Dashboard() {

    const [btn,setbtn]=useState(false)
    const handledisplay=()=>{
        setbtn(!btn);
    }
  return (
    // {styles.bannerContainer}  
    // {`${styles.btndisplay} ${styles.blue}`}
    <div>
        <main>
        <Header/>
        <div>
            <div className="down">
                <div className="down-list">
                    <ul className="list2 abc">
                        <li className="display">Displays</li>
                        <li><Link to='/content' style={{textDecoration:"none" ,color:"#7E7E7E"}}>My Content</Link></li>
                        <li><Link to='/playlist' style={{textDecoration:"none" ,color:"#7E7E7E"}}>Playlists</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bannerContainer}>
                    <div className={`${styles.display_dash} ${styles.abc}`}>
                    <div className={styles.spanContainercont}>
                        <span className={styles.span_content}>Display Dashboard</span>
                    </div>
                    <div className={styles.button_cont}>
                        <button className={`${styles.btndisplay} ${styles.blue}`} onClick={handledisplay} id="adddisplay">+ ADD A DISPLAY</button>
                        <button className={`${styles.btndisplay} ${styles.brown}`}><Link to='/managedisplay' style={{textDecoration:"none" ,color:"#7E7E7E"}}>Manage Displays</Link></button>
                    </div>
                    
                </div>

                <div className={`${styles.show_displaycontainer} ${styles.abc}`}>
                    <div className={styles.showdisplayleft}>
                        <span className={styles.showdisplaycontent}>Show Display:</span>
                        <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Campagin Mode</button>
                        <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Mycompagin Mode</button>
                        <button className={`${styles.btndisplay} ${styles.brown} ${styles.campagindash}`}>Archived</button>
                    </div>
                
                    <div className={styles.showdisplayright}>
                        <span className={styles.sortbycontent}>Sort by:</span>
                        <select name="" id="" className={styles.optioncontainer}>
                            <option value="" className={styles.newestfirstcontent}>Newest first</option>
                        </select>
                    </div>

                </div>
            {/* display popup */}

            <div className={styles.popup} style={{display:btn?"flex":"none"}}>
            <div className={styles.contentcontainer}>
        <div className={`${styles.mainheadingcontent} ${styles.flex}`}>
            <p className={`${styles.mainheadingcontent_para} ${styles.flex}`}>Add a display</p>
        </div>
         <form action="" style={{marginTop: '40px'}}>
             
            <label for="" className={styles.screencodecontent}>Screen code</label><br />
            <input type="text" className={styles.screentext} placeholder="Enter Screen Code"/><br />
            <label for="" className={styles.screencodecontent}>Screen Name</label><br />
            <input type="text" className={styles.screentext} placeholder="Enter Screen Name"/><br />
            <label for="" className={styles.screencodecontent}>Time Zone</label><br />
            <input type="text" className={styles.screentext} placeholder="(GMT + 5:30) Bombay Culcutta, Madras, New Delhi"/>
        
        </form>


        <div className={`${styles.btncontainer} ${styles.flex}`}>
            <button className={styles.addbtn} id="Addbtn">Add</button>
            <button className={styles.cancelbtn} onClick={handledisplay}>Cancel</button>
        </div>
    </div>
            </div>



            {/* display popup end */}
                <div className={styles.productcontainer}>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p>	&lt; Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p>	&lt; Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p>&lt; Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p>	&lt; Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p>	&lt; Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                </div>


            
            </div>
        <Footer/>
        </div>

    </main>
    </div>
  )
}
