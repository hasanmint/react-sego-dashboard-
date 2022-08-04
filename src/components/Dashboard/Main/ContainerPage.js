import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomerAppChart from './Chart/CustomerAppChart';
import OrderSummeryChart from './Chart/OrderSummeryChart';
import PieChart from './Chart/PieChart';
import RevenueChart from './Chart/RevenueChart';
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

                        {/* Rechart Row */}

                        <div class="row">
                            <div class="col-xl-6 col-md-12">
                                <div class="card">
                                    <div class="card-content">
                                        <OrderSummeryChart></OrderSummeryChart>
                                        <div class="card-body cleartfix">
                                            <div class="media align-items-stretch">
                                                <div class="align-self-center">
                                                </div>
                                                <div class="media-body">

                                                </div>
                                                <div class="align-self-center">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-md-12">
                                <div class="card">
                                    <div class="card-content">
                                    <RevenueChart></RevenueChart>
                                        <div class="card-body cleartfix">
                                            <div class="media align-items-stretch">
                                                <div class="align-self-center">
                                                </div>
                                                <div class="media-body">

                                                </div>
                                                <div class="align-self-center">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Rechart Row */}

                         <div class="row">
                            <div class="col-xl-8 col-md-12">
                                <div class="card">
                                    <div class="card-content">
                                        <CustomerAppChart></CustomerAppChart>
                                        <div class="card-body cleartfix">
                                            <div class="media align-items-stretch">
                                                <div class="align-self-center">
                                                </div>
                                                <div class="media-body">

                                                </div>
                                                <div class="align-self-center">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="col-xl-4 col-md-12">
                                <div class="card">
                                    <div class="card-content">
                                    <RevenueChart></RevenueChart>
                                        <div class="card-body cleartfix">
                                            <div class="media align-items-stretch">
                                                <div class="align-self-center">
                                                </div>
                                                <div class="media-body">

                                                </div>
                                                <div class="align-self-center">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default ContainerPage;