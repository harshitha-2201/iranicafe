import React from 'react'
import food4 from '../assets/food4.jpg'
import food2 from '../assets/food2.jpg'
import chai2 from '../assets/chai2.jpg'
import food3 from '../assets/food3.jpg'

const Features = () => {
  return (
    <section>
      <div  className='featuresection'>

        <div>
          <h1 className='featureshead'>All Time Favourites</h1>
          <p className='featuresp'>Breakfast To Breaks</p>
          <p className='featuresp'>Authentic Iranian Style</p>
          </div>

        <div className='featurecontainer'>
          <div>
            <img src ={food4} alt = 'featureimage' className='featureimage'/>
          </div>
          <div className='featurefood'>
            <h1 className='favfood'>Bun Maska Jam</h1>
            <p>Add a sweet twist to the classic Bun Maska Jam combination and take a trip down memory lane that
               will leave your stomach full, but asking for more!</p>
          </div>
        </div>

        <div className='featurecontainer'>
           <div className='featurefood'>
               <h1 className='favfood'>Bun Mushka Chai</h1>
               <p>This classic combination always seals the deal! There is nothing more complete than Bun Maska Chai smothered with butter. 
                Allow it to melt in your mouth and ease yourself with the warmth from each sip of Irani Chai.</p>
           </div>
           <div>
             <img src ={food2} alt = 'featureimage' className='featureimage'/>
           </div>
        </div>

      
        <div className='featurecontainer'>
          <div>
            <img src ={chai2} alt = 'featureimage' className='featureimage'/>
          </div>
          <div className='featurefood'>
            <h1 className='favfood'>Irani Tea</h1>
            <p>Balance the flavours of a sip of our Irani Black tea leaves,
               infused with rose petals and saffron, with one bite of a date. 
               Pair it with an item out of our bakery for a truly refreshing experience.</p>
          </div>
        </div>



        <div className='featurecontainer'>
           <div className='featurefood'>
               <h1 className='favfood'>Chicken Kheema</h1>
              <p> Its a balanced Diet about the person to person We use a traditional wood-fired oven where most of the bread, bun and broon are baked.at topings is great that you can use anything</p>
           </div>
           <div>
             <img src ={food3} alt = 'featureimage' className='featureimage'/>
           </div>
        </div>


      </div>
      
    </section>
    
  )
}

export default Features