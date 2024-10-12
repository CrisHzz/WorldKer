import React from 'react';
import Link from 'next/link'; 
import './page.css'; 

function HomeNavbar() {
    return (
        <div className="container">
            <div className="sidebar">
                <ul className="nav">
                    <li className="cc c1"><Link href="/home">Home</Link></li>
                    <li className="cc"><Link href="/profile">Profile</Link></li>
                    
                    
                    <li className="logout">
                        <Link href="/logout" className="logout-link">
                            Log Out
                            <img className="icon-logout" src="https://img.icons8.com/tiny-glyph/16/exit.png" />
                        </Link>
                    </li>

                </ul>
            </div>

            <nav className="homenavbar">
                <ul>
                    <li className="logoapp">
                    </li>

                    

                    <li className="nav-item fl">
                        Fluttershy Uwu
                    </li>

                    <li className="nav-item profile-img">
                        <img src="/wBee.jpg" className="profile-pic" />



                    </li>
                </ul>
            </nav>
            <div className="transparent">

                
                <section className="toprockets">
                    <h2 className="title">Top Rockets</h2>
                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wdani.jpg" className="profile-pic" />

                            </li>
                            <li>
                                <p className="name">Dani Morales</p>
                            </li>
                            <li>
                                <img className="icon-rocket" src="https://img.icons8.com/ios-glyphs/30/rocket.png" alt="rocket"/>

                            </li>
                            <li>
                                <p className="rocketsnum">143</p>
                            </li>
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wcris.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Cris Hernández</p>
                            </li>
                            <li>
                                <img className="icon-rocket" src="https://img.icons8.com/ios-glyphs/30/rocket.png" alt="rocket"/>
                            </li>
                            <li>
                                <p className="rocketsnum">102</p>
                            </li>
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wvelez.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Mari Vélez</p>
                            </li>
                            <li>
                                <img className="icon-rocket" src="https://img.icons8.com/ios-glyphs/30/rocket.png" alt="rocket"/>
                                
                            </li>
                            <li>
                                <p className="rocketsnum">94</p>
                            </li>
                        </ul>
                    </div>
                    
                </section>



                <section className="feed">
                </section>

                <section className="rockets-container">
                    Rockets Left:&nbsp;
                    <img className="icon-rocket" src="https://img.icons8.com/ios-glyphs/30/rocket.png" alt="rocket" /> 37
                </section>  





                
                <section className="team">
                    <h2 className="title2">MY TEAM</h2>
                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wdani.jpg" className="profile-pic" />

                            </li>
                            <li>
                                <p className="name">Dani Morales</p>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wcris.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Cris Hernández</p>
                            </li>
                           
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wvelez.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Mari Vélez</p>
                            </li>
                            
                            
                        </ul>
                    </div>

                </section>



                <section className="lastf">
                    <h2 className="title3">Lastest Followers</h2>
                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wdani.jpg" className="profile-pic" />
                            </li>
                            <li>
                                <p className="name">Dani Morales</p>
                            </li>
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wcris.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Cris Hernández</p>
                            </li>
                        </ul>
                    </div>

                    <div className="person">
                        <ul className="personinfo">
                            <li>
                                <img src="/wvelez.jpg"  className="profile-pic"/>
                            </li>
                            <li>
                                <p className="name">Mari Vélez</p>
                            </li>
                            
                            
                        </ul>
                    </div>
                    
                </section>
                <section className="calendar">
                    Calendar&nbsp;
                    <img className="icon-calendar" src="https://img.icons8.com/ios-filled/50/calendar--v1.png" alt="rocket" /> 
                </section>  
               

            </div>


        </div>
    );
}

export default HomeNavbar;
