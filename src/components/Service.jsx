import React from 'react'
import special1 from '../assets/special1.jpg'
import special2 from '../assets/special2.jpg'
import special3 from '../assets/special3.jpg'
import special4 from '../assets/special4.jpg'

const Service = () => {
  return (
    <section>
       <h1 className='specialhead'>Your Specials</h1>
       <p className='makespecial'>Make Your Special</p>
      <div className='flexcard'>
       <div className='specialcontainer'>
          
        
          <div>
             <img src={special1} alt = "specialimg1" className='specialimg'/>
          </div>

         <div className='specialcard'>
           <h2>Mawa Cake</h2>
           <p>Soft nostalgia, especially when paired with tea or coffee, is what Mawa Cake brings to your life. The perfect size for a 
           quick bite, it is one of Pune's little treasured snacks.</p>
        </div>
      </div>

       
      <div className='specialcontainer'>
        <div>
          <img src={special2} alt = "specialimg2" className='specialimg'/>
          </div>
         <div className='specialcard'>
           <h2>Coconut Cake</h2>
        <p>They call it the pink of health indeed, our little coconut cakes are known to raise the spirits of children and adults alike! Smooth cream paired with  */}
          cake and coconut shavings do make quite the treat.</p>
        </div>
      </div>
      </div>
      
    <div className='flexcard'>
      <div className='specialcontainer'>
        <div>
          <img src={special3} alt = "specialimg3" className='specialimg'/>
          </div>
         <div className='specialcard'>
           <h2>Cream Roll</h2> 
            <p>A classic favourite that probably made its way from your childhood to now, crumbly and crispy, filled with creamy goodness, our cream rolls are a tempting
             call for a quick snack with hot coffee or tea!</p>
        </div>
      </div>
      
      <div className='specialcontainer'> 
        <div>
          <img src={special4} alt = "specialimg4" className='specialimg'/>
          </div>
         <div className='specialcard'>
           <h2>Special Dish</h2>
           <p> when paired with tea or coffee, is what Mawa Cake brings to your life. The perfect size for a 
           quick bite, it is one of Pune's little treasured snacks.</p>
         </div>
        </div>
    </div>
    
 </section>
  )
}

export default Service