import React from 'react';

const ContainerPage = () => {
    return (
        <>
            <div class="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card card-bg">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="danger">459</h3>
                                                <span>Total Menus</span>
                                            </div>
                                            <div class="align-self-center">
                                            <i class="fas fa-bars fa-3x"></i>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card card-bg">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="success">$ 87,561</h3>
                                                <span>Total Revenue</span>
                                            </div>
                                            <div class="align-self-center">
                                            <i class="fas fa-dollar-sign fa-3x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card card-bg">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="warning">247</h3>
                                                <span>Total Oders</span>
                                            </div>
                                            <div class="align-self-center">
                                            <i class="fas fa-cart-plus fa-3x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card card-bg">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h3 class="primary">872</h3>
                                                <span>Total Customers</span>
                                            </div>
                                            <div class="align-self-center">
                                            <i class="fas fa-users fa-3x"></i>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default ContainerPage;