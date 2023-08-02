import React, { Component } from 'react';
import Slider from '../inc/Slider';
import Mov from './includes/Mov';
import Footer from '../inc/Footer';


class Home extends React.Component{
    render(){
return(
    <div>
        
        <Slider />
        <section className='py-5'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>Our Culture                  
                                   </h4>
                                   <div className='underline mb-3'>

                                   </div>
                            <p>
                             lectus mauris. Pretium quam vulputate dignissim suspendisse in est ante in. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec feugiat in. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.      </p>
                        </div>
                    </div>

                </div>
            
        </section>
        < Mov />
        <section className="py-5">
            <div className='flexbox-container'>
                <div className='row'>
                    <div className='col-md-12'>
                        
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h4>Services</h4>
                                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>

                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-4'>
                            <div className='container'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h4>Services111</h4>
                                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div>
                                    <h4>Services111</h4>
                                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div>
                
                <Footer/>

            </div>
            
        </section>
        
          
           





        <h2>Intro to Home</h2>
        <button class="btn btn-primary">Study section</button>
    </div>
    
)
   }

}
export default Home;