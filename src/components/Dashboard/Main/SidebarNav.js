import React from 'react';
import { Link } from "react-router-dom";

const SidebarNav = () => {
    return (
        <>
            <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                       <li class="sidebar-item"> <Link to="/" class="sidebar-link sidebar-link active" 
                                aria-expanded="false"><i data-feather="home" class="feather-icon"></i><span
                                    class="hide-menu">Dashboard</span></Link></li>
                        <li class="list-divider"></li>
                       

                        <li class="sidebar-item"> <Link to="/orders"  class="sidebar-link" 
                                aria-expanded="false"><i data-feather="tag" class="feather-icon"></i><span
                                    class="hide-menu">Orders</span>
                                    <span class="badge badge-primary notify-no rounded-circle ml-3">25</span>
                                    </Link>
                        </li>
                       
                       
                        <li class="sidebar-item"> <Link to="/menus" class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><i data-feather="grid" class="feather-icon"></i><span
                                    class="hide-menu">Menus </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="/submenu1"   class="sidebar-link"><span
                                            class="hide-menu">Submenu
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/submenu2"  class="sidebar-link"><span
                                            class="hide-menu"> Submenu
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/submenu3"  class="sidebar-link"><span
                                            class="hide-menu">
                                            Submenu
                                        </span></Link>
                                </li>
                               
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link to="/customers" class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><span class=" iconify feather-icon" data-icon="ph:users-light"></span><span
                                    class="hide-menu">Customers </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="/addnew"  class="sidebar-link"><span
                                            class="hide-menu"> Add New
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/members"  class="sidebar-link"><span
                                            class="hide-menu"> Members
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/general" class="sidebar-link"><span
                                            class="hide-menu">
                                            General Customers
                                        </span></Link>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link to="/analytics" class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><span class=" iconify feather-icon" data-icon="icon-park-outline:analysis"></span><span
                                    class="hide-menu">Analytics </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="/analytics1"   class="sidebar-link"><span
                                            class="hide-menu">Submenu
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/analytics2"    class="sidebar-link"><span
                                            class="hide-menu"> Submenu
                                        </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="/analytics3"    class="sidebar-link"><span
                                            class="hide-menu">
                                            Submenu
                                        </span></Link>
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
        </>
    );
};

export default SidebarNav;