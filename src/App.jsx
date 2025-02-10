import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo1 from './assets/img/Logo (14).png'
import logo2 from './assets/img/rasm2.png'
import logo3 from './assets/img/rasm3.png'
import logo4 from './assets/img/Free.png'
import logo5 from './assets/img/Standard.png'
import logo6 from './assets/img/Premium.png'
import logo7 from './assets/img/rasm7.png'
import logo8 from './assets/img/rasm8.png'
import logo9 from './assets/img/rasm9.png'
import logo10 from './assets/img/rasm10.png'
import logo11 from './assets/img/rasm11.png'
import logo12 from './assets/img/rasm12.png'
import logo13 from './assets/img/rasm13.png'
import logo14 from './assets/img/rasm14.png'
import logo15 from './assets/img/rasm15.png'
import logo16 from './assets/img/rasm16.png'



function App() {
  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <header className='container header'>
                <img className='toplogo' style={{width:"120px",height:"30px"}} src={logo1} alt="" />
              <div className='aaaaa'>
                    <a className='a1' href="">About</a>
                    <a className='a1' href="">Features</a>
                    <a className='a1' href="">Pricing</a>
                    <a className='a1' href="">Testimonials</a>
                    <a className='a1' href="">Help</a>
              </div>
              <div className='buttons1'>
                    <a className='a2' href=""><h3>Sign in</h3></a>
                    <button className='button1'>Sign Up</button>
              </div>

        </header>
        <main className='container main'>

            <section className='section1'>
                  <div className='chap1'>
                      <h1 className='text2'>Want anything to be </h1>
                      <h1 className='text2'>easy with LaslesVPN.</h1><br /><br />
                      <p className='text10'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p><br /><br /><br />
                      <button className='button2'>Get Started</button><br />
                  </div>
                  
                    <img className='bigimg1'  src={logo2} alt="" />
                  
            </section>
            <div className='statistics'>
                  <div  className='statistic'>
                    <div className='icondiv'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <h2>90+</h2>
                        <p className='bbbq'>Users</p>
                    </div>
                  </div>
                  <div className='tekischiziq'>

                  </div>
                  <div  className='statistic'>
                    <div className='icondiv'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <h2>30+</h2>
                        <p className='bbbq'>Locations</p>
                    </div>
                  </div>
                  <div className='tekischiziq'>

                  </div>
                  <div  className='statistic'>
                    <div className='icondiv'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <h2>50+</h2>
                        <p className='bbbq'>Servers</p>
                    </div>
                  </div>
            </div>
            <div className='weprovide'>
                <img className='bigimg2' src={logo3} alt="" />
                <div className='weprovidemany'>
                      <h1 className='text5'>We Provide Many Features You Can Use</h1><br />
                      <p className='bbbq'>You can explore the features that we provide with fun and have their own functions each feature.</p><br />
                      <div className='checkdiv'>
                        <i class="fa-solid fa-circle-check"></i>
                        <p className='bbbq powerfull'>Powerfull online protection.</p>
                      </div><br />
                      <div className='checkdiv'>
                        <i class="fa-solid fa-circle-check"></i>
                        <p className='bbbq powerfull'>Internet without borders.</p>
                      </div><br />
                      <div className='checkdiv'>
                        <i class="fa-solid fa-circle-check"></i>
                        <p className='bbbq powerfull'>Supercharged VPN</p>
                      </div><br />
                      <div className='checkdiv'>
                        <i class="fa-solid fa-circle-check"></i>
                        <p className='bbbq powerfull'>No specific time limits.</p>
                      </div>

                </div>
            </div>
            <section className='section2'>
                <div className='choose'>
                  <h1 className='text4'>Choose Your Plan</h1><br /><br />
                  <p className='text9 bbbq'>Let's choose the package that is best for you and explore it happily and </p><br />
                  <p className='text9 bbbq'>cheerfully.</p>
                </div>


                <div className='freestandartpremium'>
                      <div className='freeplan'>
                            <img src={logo4} alt="" /><br /><br />
                            <h2>Free Plan</h2><br /><br />

                            <div className='checkdiv2'>
                            <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Unlimited Bandwitch</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Encrypted Connection</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>No Traffic Logs</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Works on All Devices</p>
                      </div><br /><br /><br /><br /><br /><br />


                            <h2>Free</h2><br />
                            <button className='button3'>Select</button>
                      </div>
                      <div className='freeplan'>
                            <img src={logo5} alt="" /><br /><br />
                            <h2>Standard Plan</h2><br /><br />

                            <div className='checkdiv2'>
                            <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Unlimited Bandwitch</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Encrypted Connection</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>No Traffic Logs</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Works on All Devices</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>No Traffic Logs</p>
                      </div><br /><br /><br /><br />



                            <h2 className='narxingqancha'>$9 <h3 className='bbbq'>/ mo</h3></h2><br />
                            <button className='button3'>Select</button>
                      </div>
                      <div className='premiumplan'>
                            <img src={logo6} alt="" /><br /><br />
                            <h2>Premium Plan</h2><br /><br />

                            <div className='checkdiv2'>
                            <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Unlimited Bandwitch</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Encrypted Connection</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>No Traffic Logs</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Works on All Devices</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>No Traffic Logs</p>
                      </div><br />
                      <div className='checkdiv2'>
                      <i class="fa-solid fa-check"></i>
                        <p className='bbbq'>Get New Features</p>
                      </div><br /><br /><br />



                            <h2 className='narxingqancha'>$12 <h3 className='bbbq'>/ mo</h3></h2><br />
                            <button className='button4'>Select</button>
                      </div>
                      


                </div>



                <div className='hugeglobal'>
                  <h1 className='text4'>Huge Global Network</h1><br />
                  <h1 className='text4'>of Fast VPN</h1><br /><br />
                  <p className='text9 bbbq'>See LaslesVPN everywhere to make it easier for you when you move </p><br />
                  <p className='text9 bbbq'>locations.</p><br />

                </div>
                <div className='dunyorasmidiv'>
                  <img className='dunyorasmi'  src={logo7} alt="" />
                </div>
                <div className='sponsorlar'>
                      <img src={logo8} alt="" />
                      <img src={logo9} alt="" />
                      <img src={logo10} alt="" />
                      <img src={logo11} alt="" />
                      <img src={logo12} alt="" />
                </div>
                <div className='hugeglobal2'>
                  <h1 className='text4'>Trusted by Thousands of </h1><br />
                  <h1 className='text4'>Happy Customer</h1><br /><br />
                  <p className='text9 bbbq'>These are the stories of our customers who have joined us with great </p><br />
                  <p className='text9 bbbq'>pleasure when using this crazy feature.</p><br />

                </div>
                <div className='otzivlar'>
                      <div className='otziv'>

                        <div className='otzivodam'>
                              <div className='otzivrasm'>
                                      <img src={logo13} alt="" />
                                      <div className='otzivismshahar'>
                                        <h3>Viezh Robert</h3>
                                        <p className='bbbq'>Warsaw, Poland</p>
                                      </div>
                              </div>
                              <div className='otzivreyting'>
                                        <p>4.5</p>
                                        <i class="fa-solid fa-star"></i>
                              </div>
                            
                        </div>
                        <br />
                        <p className='otzivtext'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>

                      </div>
                        <div className='otziv2'>

                        <div className='otzivodam'>
                              <div className='otzivrasm'>
                                      <img src={logo14} alt="" />
                                      <div className='otzivismshahar'>
                                        <h3>Yessica Christy</h3>
                                        <p className='bbbq'>Shanxi, China</p>
                                      </div>
                              </div>
                              <div className='otzivreyting'>
                                        <p>4.5</p>
                                        <i class="fa-solid fa-star"></i>
                              </div>
                            
                        </div>
                        <br />
                        <p className='otzivtext'>“I like it because I like to travel far and still can connect with high speed.”.</p>

                      </div>
                        <div className='otziv2'>

                        <div className='otzivodam'>
                      <div className='otzivrasm'>
                          <img src={logo15} alt="" />
                          <div className='otzivismshahar'>
                          <h3>Kim Young Jou</h3>
                          <p className='bbbq'>Seoul, South Korea</p>
                          </div>
                          </div>
                          <div className='otzivreyting'>
                          <p>4.5</p>
                          <i class="fa-solid fa-star"></i>
                       </div>
    
                      </div>
                      <br />
                      <p className='otzivtext'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>

                      </div>
                </div>


                <div className='swiperslayd'>
                    <div>
                          <img src={logo16} alt="" />
                    </div>
                    <div className='leftxright'>
                      
                      <i class="fa-solid fa-circle-arrow-left"></i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                </div>
            </section>
            <div className='subscribenowota'>
            <div className='subscribenow'>
                <div className='text'>
                  <h1>Subscribe Now for </h1>
                  <h1>Get Special Features!</h1><br />
                  <p className='bbbq'>Let's subscribe with us and find the fun.</p>
                </div>
                <div className='buttondiv1'>
                      <button className='button5'>Subscribe Now</button>
                </div>
            </div>
            </div>


        </main>

        <footer className='container footer'>
              <div className='footerchap'>
                    <img src={logo1} alt="" /><br /><br /><br />
                    <p>LaslesVPN is a private virtual network that </p><br />
                    <p>has unique features and has high security.</p><br /><br />
                    <p className='bbbq'>©2020LaslesVPN</p>
              </div>
              <div className='footerong'>
                  <div>
                    <a className='a2' href=""><h3>Product</h3></a><br />
                    <a className='a1' href="">Download</a><br /><br />
                    <a className='a1' href="">Pricing</a><br /><br />
                    <a className='a1' href="">Locations</a><br /><br />
                    <a className='a1' href="">Server</a><br /><br />
                    <a className='a1' href="">Countries</a><br /><br />
                    <a className='a1' href="">Blog</a><br /><br />
                  </div>
                  <div>
                    <a className='a2' href=""><h3>Engage</h3></a><br />
                    <a className='a1' href="">LaslesVPN ?</a><br /><br />
                    <a className='a1' href="">FAQ</a><br /><br />
                    <a className='a1' href="">Tutorials</a><br /><br />
                    <a className='a1' href="">About Us</a><br /><br />
                    <a className='a1' href="">Privacy Policy</a><br /><br />
                    <a className='a1' href="">Terms of Service</a><br /><br />
                  </div>
                  <div>
                    <a className='a2' href=""><h3>Earn Money</h3></a><br />
                    <a className='a1' href="">Affiliate</a><br /><br />
                    <a className='a1' href="">Become Partner</a><br /><br />
                  </div>
              </div>
        </footer>
    </>
  )
}

export default App
