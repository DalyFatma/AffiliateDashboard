import React from "react";
import {
  Container,
  Dropdown,
  Form,
  Row,
  Card,
  Col,
  Button,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Breadcrumb from "Common/BreadCrumb";
import img1 from "assets/images/brands/img-1.png";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img7 from "assets/images/brands/img-7.png";
import img8 from "assets/images/brands/img-8.png";
import img9 from "assets/images/brands/img-9.png";
import img10 from "assets/images/brands/img-10.png";
import img11 from "assets/images/brands/img-11.png";
import img12 from "assets/images/brands/img-12.png";
import img13 from "assets/images/brands/img-13.png";
import img14 from "assets/images/brands/img-14.png";
import { Link } from "react-router-dom";

const ReportingManagement = () => {
  const columns = [
 
    {
      name: <span className="font-weight-bold fs-13">Invoice Number</span>,
      selector: (row: any) => row.srNo,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13"> Contract ID</span>,
      selector: (row: any) => row.modalId,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Trip ID</span>,
      selector: (row: any) => row.purchaseId,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Title</span>,
      selector: (row: any) => <Link to="#!">{row.title}</Link>,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">User</span>,
      selector: (row: any) => row.user,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Assigned To</span>,
      selector: (row: any) => row.assigned,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Create By</span>,
      selector: (row: any) => row.createdBy,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Create Date</span>,
      selector: (row: any) => row.createDate,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Status</span>,
      sortable: true,
      selector: (cell: any) => {
        switch (cell.status) {
          case "Re-open":
            return (
              <span className="badge badge-soft-info"> {cell.status} </span>
            );
          case "On-Hold":
            return (
              <span className="badge badge-soft-secondary">
                {" "}
                {cell.status}{" "}
              </span>
            );
          case "Closed":
            return (
              <span className="badge badge-soft-danger"> {cell.status} </span>
            );
          case "Inprogress":
            return (
              <span className="badge badge-soft-warning"> {cell.status} </span>
            );
          case "Open":
            return (
              <span className="badge badge-soft-primary"> {cell.status} </span>
            );
          case "New":
            return (
              <span className="badge badge-soft-success"> {cell.status} </span>
            );
          default:
            return (
              <span className="badge badge-soft-success"> {cell.status} </span>
            );
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Priority</span>,
      sortable: true,
      selector: (cell: any) => {
        switch (cell.priority) {
          case "High":
            return <span className="badge bg-danger"> {cell.priority} </span>;
          case "Medium":
            return <span className="badge bg-info"> {cell.priority} </span>;
          case "Low":
            return <span className="badge bg-success"> {cell.priority} </span>;
          default:
            return <span className="badge bg-danger"> {cell.priority} </span>;
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: () => {
        return (
          <Dropdown className="dropdown d-inline-block">
            <Dropdown.Toggle className="btn btn-soft-secondary arrow-none btn-sm">
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item to="#!">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
              </Dropdown.Item>
              <Dropdown.Item className="edit-item-btn">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                Edit
              </Dropdown.Item>
              <Dropdown.Item className="remove-item-btn">
                {" "}
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                Delete{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      },
    },
  ];
  const data = [
    {
      srNo: "01",
      modalId: "VLZ-452",
      purchaseId: "VLZ1400087402",
      title: "Post launch reminder/ post list",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "03 Oct, 2021",
      status: "Re-open",
      priority: "High",
    },
    {
      srNo: "02",
      modalId: "VLZ-453",
      purchaseId: "VLZ1400087425",
      title: "Additional Calendar",
      user: "Diana Kohler",
      assigned: "Admin",
      createdBy: "Mary Rucker",
      createDate: "05 Oct, 2021",
      status: "On-Hold",
      priority: "Medium",
    },
    {
      srNo: "03",
      modalId: "VLZ-454",
      purchaseId: "VLZ1400087438",
      title: "Make a creating an account profile",
      user: "Tonya Noble",
      assigned: "Admin",
      createdBy: "Tonya Noble",
      createDate: "27 April, 2022",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "04",
      modalId: "VLZ-455",
      purchaseId: "VLZ1400087748",
      title: "Apologize for shopping Error!",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "14 June, 2021",
      status: "Inprogress",
      priority: "Medium",
    },
    {
      srNo: "05",
      modalId: "VLZ-456",
      purchaseId: "VLZ1400087547",
      title: "Support for theme",
      user: "Donald Palmer",
      assigned: "Admin",
      createdBy: "Donald Palmer",
      createDate: "25 June, 2021",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "06",
      modalId: "VLZ-457",
      purchaseId: "VLZ1400087245",
      title: "Benner design for FB & Twitter",
      user: "Mary Rucker",
      assigned: "Jennifer Carter",
      createdBy: "Mary Rucker",
      createDate: "14 Aug, 2021",
      status: "Inprogress",
      priority: "Medium",
    },
    {
      srNo: "07",
      modalId: "VLZ-458",
      purchaseId: "VLZ1400087785",
      title: "Change email option process",
      user: "James Morris",
      assigned: "Admin",
      createdBy: "James Morris",
      createDate: "12 March, 2022",
      status: "Open",
      priority: "High",
    },
    {
      srNo: "08",
      modalId: "VLZ-460",
      purchaseId: "VLZ1400087745",
      title: "Support for theme",
      user: "Nathan Cole",
      assigned: "Nancy Martino",
      createdBy: "Nathan Cole",
      createDate: "28 Feb, 2022",
      status: "On-Hold",
      priority: "Low",
    },
    {
      srNo: "09",
      modalId: "VLZ-461",
      purchaseId: "VLZ1400087179",
      title: "Form submit issue",
      user: "Grace Coles",
      assigned: "Admin",
      createdBy: "Grace Coles",
      createDate: "07 Jan, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "10",
      modalId: "VLZ-462",
      purchaseId: "VLZ140008856",
      title: "Edit customer testimonial",
      user: "Freda",
      assigned: "Alexis Clarke",
      createdBy: "Freda",
      createDate: "16 Aug, 2021",
      status: "Closed",
      priority: "Medium",
    },
    {
      srNo: "11",
      modalId: "VLZ-463",
      purchaseId: "VLZ1400078031",
      title: "Ca i have an e-copy invoice",
      user: "Williams",
      assigned: "Admin",
      createdBy: "Williams",
      createDate: "24 Feb, 2022",
      status: "Open",
      priority: "Low",
    },
    {
      srNo: "12",
      modalId: "VLZ-464",
      purchaseId: "VLZ1400087416",
      title: "Brand logo design",
      user: "Richard V.",
      assigned: "Admin",
      createdBy: "Richard V.",
      createDate: "16 March, 2021",
      status: "Inprogress",
      priority: "High",
    },
    {
      srNo: "13",
      modalId: "VLZ-466",
      purchaseId: "VLZ1400089015",
      title: "Issue with finding information about order ?",
      user: "Olive Gunther",
      assigned: "Alexis Clarke",
      createdBy: "Schaefer",
      createDate: "32 March, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "14",
      modalId: "VLZ-467",
      purchaseId: "VLZ1400090324",
      title: "Make a creating an account profile",
      user: "Edwin",
      assigned: "Admin",
      createdBy: "Edwin",
      createDate: "05 April, 2022",
      status: "Inprogress",
      priority: "Low",
    },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Reporting Management" pageTitle="Reporting" />
          <Col lg={12}>
           
            <Card id="shipmentsList">
              <Card.Header className="border-bottom-dashed">
                <Row className="g-3">
                  <Col xxl={3} lg={6}>
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control search"
                        placeholder="Search for something..."
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </Col>
                  <Col lg={3}>
                  <select
                      className="form-select"
                      data-choices
                      data-choices-search-false
                      name="choices-single-default"
                      id="idStatus"
                    >
                      <option value="all">All</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                      <option value="Last 7 Days">Last 7 Days</option>
                      <option value="Last 30 Days">Last 30 Days</option>
                      <option defaultValue="This Month">This Month</option>
                      <option value="Last Month">Last Month</option>
                    </select>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <div
                      className="btn-group btn-group-sm mt-2"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-outline-dark">
                        Excel
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        PDF
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        Print
                      </button>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <DataTable columns={columns} data={data} pagination />
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default ReportingManagement;