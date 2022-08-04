import React from 'react';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
    return (
        <>
     
         
           <aside class="left-sidebar" data-sidebarbg="skin6">
            {/* <!-- Sidebar scroll--> */}
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                {/* <!-- Sidebar navigation--> */}
        
                <SidebarNav></SidebarNav>
                
                {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
        </aside>  
        </>
    );
};

export default Sidebar;