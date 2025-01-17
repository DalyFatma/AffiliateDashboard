import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Widgets from './Widgets';
import NewStudents from './NewStudent';
import TopTrips from './TopTrips';

const Dashboard = () => {

    document.title = "Dashboard | School Administration";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xxl={12} lg={6} className="order-first">
                            <Row className="row-cols-xxl-4 row-cols-1">
                                <Widgets />
                            </Row>
                        </Col>
                        {/* <Revenue />
                        <TopSalesLocation />
                    </Row>
                    <Row>
                        <RecentOrders />*/}
                    </Row> 
                    <Row className='widget-responsive-fullscreen'>
                        {/* <CustomerSatisfaction />
                        <StockReport /> */}
                        {/* <ProductDelivery />
                        <TopCategories /> */}
                        <NewStudents />
                        <TopTrips />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;