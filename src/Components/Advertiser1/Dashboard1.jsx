import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './dashboard1.css'

function Dashboard1() {
  return (
    <div>
        <Header/>
        <main>
            <div className='stages-container'>
                <div className='first_stage'>
                    <span>1</span>
                </div>
                <div  style={{display:"flex",alignItems:"center"}}>
                    <div style={{width: '221px',height:"0px", border:'2px solid #FFE5A3'}}></div>
                </div>
                <div className='first_stage'>
                    <span>2</span>
                </div>
                <div  style={{display:"flex",alignItems:"center"}}>
                    <div style={{width: '221px',height:"0px", border:'2px solid #FFE5A3'}}></div>
                </div>
                <div className='first_stage' style={{background:'#FFE5A3'}}>
                    <span>3</span>
                </div>
                
            </div>
            <div className="budgetcontainer">
                <div className="budget">
                    <div className="budgetheading">
                        <p>Set a budget</p>
                    </div>
                    <div className="budgetitemsContainer">
                        <span className='budgetitems'>10</span>
                        <span className='budgetitems yellow'>25</span>
                        <span className='budgetitems'>50</span>
                        <span className='budgetitems'>or</span>
                        <span className='budgetitems'>25</span>
                    </div>
                </div>

                <div className="contracts">
                    <div className="contractsheading">
                        <h3>Contracts</h3>
                    </div>
                    <div className="contractsitemsContainer">
                        <span className='contractsitems yellow'>Weekly</span>
                        <span className='contractsitems'>Daily</span>
                        <span className='contractsitems'>100 - 300</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Dashboard1