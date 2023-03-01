import React from 'react'
import {GrLocation} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
import{BsInstagram} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    
      <div className='footercontainer'>
           <div>
            <h1 className='logos'>Irani cafe</h1>
            <p className=' logostestimonial'>From breakfast to breaks, your favourite
               go-to place. Irani Cafe is a trendier 
               version of Iran's excellence.</p>
           </div>
           <div>
            <div className='locationcard'>
              <GrLocation className='locationsymbl'/>
              <h1 className='locations'>Kondapoor,Hyderbad 50003 </h1>
            </div>
            <div>
              <p className='detaillocation'>Shop No 2, Turning Point 2, Opp Rosary School | Call 074200 53999 | Opens at 6:00 AM</p>
           </div>
           </div>

           <div>
            <div className='locationcard'>
              <GrLocation className='locationsymbl'/>
              <h1 className='locations'> Uppal, Hyderbad 507155 </h1>
            </div>
            <div>
              <p className='detaillocation'>World Trade Center | Call: 07420053997 | Opens at 3:00 AM</p>
           </div>
           </div>

           <div>
            <div className='locationcard'>
              <GrLocation className='locationsymbl'/>
              <h1 className='locations'> Charminar, Hyderbad 501236 </h1>
            </div>
            <div>
              <p className='detaillocation'>Shop No 2, 10 North Co-operative Housing Society Ltd.Opposite Pushpak Society |Call 7420053996 | Opens at 6:00 AM</p>
           </div>
           </div>

           <div>
            <div className='locationcard'>
              <GrLocation className='locationsymbl'/>
              <h1 className='locations'> Magarpatta, Hyderbad 854123 </h1>
            </div>
            <div>
              <p className='detaillocation'>Shop No 3, Konark Icon, Next to Maruti Suzuki Showroom,Call 7420016285 | Opens at 6:00 AM</p>
           </div>
           </div>
           <hr style={{
            background: 'black',
            height: "2px",
            border: "none",
            paddingBottom : '2px',
           }}/>

           <h1>Follow Us On</h1>
           <div>
           <AiOutlineYoutube className='cards' />
           < BsInstagram className='cards'/>
           <FiTwitter  className='cards' />
           </div>
           <div className='copyright'>
           <BiCopyright  className='cards'/>
           <p>Iranicafe</p>
           </div>
           <p>Copyrights And author @harshitha</p>
           <hr style={{
            background: 'black',
            height: "2px",
            border: "none",
            paddingBottom : '3px',
           }}/>
         
      </div>
    
    
  )
}

export default Footer
