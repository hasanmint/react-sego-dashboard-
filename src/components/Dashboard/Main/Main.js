import React from 'react';
import ContainerPage from './ContainerPage';
import Header from './Header';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <>
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
                <Header></Header>
                <Sidebar></Sidebar>
                <ContainerPage></ContainerPage>
            </div>
        </>
    );
};

export default Main;