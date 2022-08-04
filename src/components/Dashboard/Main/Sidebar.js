import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
     
         
           <aside class="left-sidebar" data-sidebarbg="skin6">
            {/* <!-- Sidebar scroll--> */}
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                {/* <!-- Sidebar navigation--> */}
        

                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                       <li class="sidebar-item"> <Link to="/" class="sidebar-link sidebar-link active" 
                                aria-expanded="false"><i data-feather="home" class="feather-icon"></i><span
                                    class="hide-menu">Dashboard</span></Link></li>
                        <li class="list-divider"></li>
                       

                        <li class="sidebar-item"> <Link to="/orders"  class="sidebar-link" 
                                aria-expanded="false"><i data-feather="tag" class="feather-icon"></i><span
                                    class="hide-menu">Orders</span></Link>
                        </li>
                       
                       
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><i data-feather="grid" class="feather-icon"></i><span
                                    class="hide-menu">Menus </span></a>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><a href="table-basic.html" class="sidebar-link"><span
                                            class="hide-menu">Submenu
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="table-dark-basic.html" class="sidebar-link"><span
                                            class="hide-menu"> Submenu
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="table-sizing.html" class="sidebar-link"><span
                                            class="hide-menu">
                                            Submenu
                                        </span></a>
                                </li>
                               
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link to="/customers" class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><span class=" iconify feather-icon" data-icon="ph:users-light"></span><span
                                    class="hide-menu">Customers </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><a href="chart-morris.html" class="sidebar-link"><span
                                            class="hide-menu"> Add New
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="chart-chart-js.html" class="sidebar-link"><span
                                            class="hide-menu"> Members
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="chart-knob.html" class="sidebar-link"><span
                                            class="hide-menu">
                                            General Customers
                                        </span></a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link to="/analytics" class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><span class=" iconify feather-icon" data-icon="icon-park-outline:analysis"></span><span
                                    class="hide-menu">Analytics </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><a href="-basic.html" class="sidebar-link"><span
                                            class="hide-menu">Submenu
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="dark-basic.html" class="sidebar-link"><span
                                            class="hide-menu"> Submenu
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="sizing.html" class="sidebar-link"><span
                                            class="hide-menu">
                                            Submenu
                                        </span></a>
                                </li>
                               
                            </ul>
                        </li>

                      
                        
                        <li class="list-divider"></li>
                    
                        <div className='card mt-5'>
                        <div class="container">
                            <p><small><b>Sego Restaurant Admin Dashboard</b></small> <br></br>
                            <small> ©2020 All Rights Reserved.  <br></br>
                            Made with ♥ by Peterdraw</small>
                            </p>
                         </div>
                        </div>

                      
                    
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
        </aside>  
        </>
    );
};

export default Sidebar;