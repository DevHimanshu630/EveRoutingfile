import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './managedisplay.module.css'
import graph from '../Images/graph.png'
import graph1 from '../Images/solidgraph.png'
import growth1 from '../Images/growth1.jpg'
export default function Managedisplay() {
    return (
        <>
            <Header />
            <div className="down">
                <div className="down-list">
                    <ul className="list2 abc">
                        <li ><Link to='/' style={{ textDecoration: "none", color: "#7E7E7E" }}> Displays</Link></li>
                        <li className="display">My Content</li>
                        <li><Link to='/playlist' style={{ textDecoration: "none", color: "#7E7E7E" }}>Playlists</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bannerContainer}>
                <div className={styles.display_dash}>
                    <div className={styles.spanContainercont}>
                        <span>Total Displays : 50</span>
                    </div>
                    <div className={styles.button_cont}>
                        <button className={`${styles.btndisplay} ${styles.blue}`} id="addcontent">+ ADD A DISPLAY</button>
                        <button className={`${styles.btndisplay} ${styles.brown}`}>Manage Displays</button>
                    </div>

                </div>

                <div className={styles.show_displaycontainer}>
                    <div className={styles.showdisplayleft}>
                        <span className={styles.showdisplaycontent}>Show Display:</span>
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
                {/* display earning graph */}
                

                
                {/* about display coding */}
                <div className={styles.productcontainer}>
                <div className={styles.earningGraph}>
                    <img src={graph} alt="" className={styles.graphimg} />
                </div>

                <div className={styles.bigcontainer}>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>

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
                                <p className={styles.earning_container}>INR 17,000</p>
                                <img width="30px" style={{backgroundColor:"white"}} src={growth1} alt="" />
                        </div>
                    </div>

                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>

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
                                <p className={styles.earning_container}>INR 17,000</p>
                                <img width="30px" style={{backgroundColor:"white"}} src={growth1} alt="" />
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>

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
                                <p className={styles.earning_container}>INR 17,000</p>
                                <img width="30px" style={{backgroundColor:"white"}} src={growth1} alt="" />
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>

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
                                <p className={styles.earning_container}>INR 17,000</p>
                                <img width="30px" style={{backgroundColor:"white"}} src={growth1} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.solidgraph}>
                    <img src={graph1} alt="" />
                </div>

                </div>
            </div>
           <Footer/>

        </>
    )
}
