import React from 'react'
import aboutus from '../assets/aboutus.jpg'

const About = () => {
  return (
    <div>
       <h1 className=' about'>ABOUT US</h1>
      <div className='aboutcontainer'>
      <div>
        <img src = {aboutus} alt = 'aboutuspage' className='aboutimg'/>
        </div>
      <div>
      <div className='aboutus'>
        
        <h2 className='aboutsub'>From Your Breakfast to Breaks</h2>
        <p className='aboutp'>We promise you a wholesome experience with delicious 
          and healthy meals at Irani Cafe, a trendy representation of Iran's 
          authenticity. With your piping hot Irani Chai, try tasty and pocket friendly
           dishes for breakfast, brunch, lunch, snacks and dinner. With a belief in quality 
           and quantity, our doors open for you at 6:00 AM every morning!</p>
      </div>
      
    
      <div className='aboutus'>
      <h2 className='aboutsub'>From Your Breakfast to Breaks</h2>
      <p className='aboutp'>All it takes is red-checkered table cloths held down by glass, surrounded by the buzz of chit chat of people 
        from far and near, wall hangings of antiques, portraits from the past and more, for it to smell like nostalgia, your old friend.

       Over 200 years ago, Iran's connection with our beloved India was kindled. Parsis and
        Iranis came to India, and brought their cuisine with them. Humbled by their kind welcome, 
        the culture of Irani Cafes was established. "Where there is Tea, there is Hope" indeed, the timeless
         drink was a strong connection between both countries.
       The period between 1965 to around 2015 saw the fading charm of Irani Cafes, until we decided 
       to bring this culture back and share what we can with our people, with the vision of making it stay this time around.</p>

      </div>
     </div>
     </div>  
     </div>
    
  )
}

export default About