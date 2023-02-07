import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./dashboard.css"
import uploadimg from '../Images/uploadImg.png'
export default function Advertisedashboard() {
  return (
    <div>
      <Header />
      <div className="compaigncontainer">
        <h1 className="campaignheading">Create a Campaign</h1>
        <div className="campaigninputcontainer flex">
          <div className='campaigninputcontainer-heading'>
            <p>Campaign Name</p>
          </div>
          <div >
            <input className="campaigninput" type="text" placeholder='My First Campaign' />
          </div>
        </div>
        <div className="uploadcontainer">
          <h1>Upload your content</h1>
          <div className='imgvdocontainer'>
            <div className="addimg">
              <img src={uploadimg} alt="" />
              <p>Add Image</p>
            </div>
            <div className="addimg">
              <img src={uploadimg} alt="" />
              <p>Add Video</p>
            </div>
            <div className="addimg">
              <img src={uploadimg} alt="" />
              <p>Add Media Library</p>
            </div>
            <div className="addimg" style={{marginTop:"50px",background: "#FDFDFD"}}>
              <img src={uploadimg} alt="" />
              <p>Add Media Library</p>
            </div>
          </div>
        </div>
        
        {/* Define your Campaign */}

        <div className='belowcampaign-container' >
          <h1 className='belowcampaign-heading'>Define your Campaign</h1>
          <p className='belowcampaign-para'>Please add as many tags as necessary to describe your campaign</p>
          <div className="tagsContainer flex">
            <div className='tags'>
              <p>Tags</p>
            </div>
            <div className="tagInputcontainer">
              <select name="" id="tagInput">
                <option value="">Please select one or more tags</option>
              </select>
              
            </div>
          </div>
          <div className='tagbtnContainer'>
            <button id='cancelbtn'>Cancel</button>
            <button id='nextbtn'>Next</button>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}


