import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import logos from "./assets/logo.jpeg";
import abhi from "./assets/abhi.png";
import bhoop from "./assets/bhoop.png";
import shubham from "./assets/shubham.png";
import OKLG7C0 from "./assets/OKLG7C0.jpg";
import india from "./assets/india.png";

import {
  FaUserAlt,
  FaWhatsapp,
  FaCloud,
  FaPhoneAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaBrain,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">BillPay</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col
            lg="6"
            sm="6"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={logos} alt="logo" width="auto" height="50%" />
            <h2
              style={{
                textJustify: "left",
                textAlign: "right",
                fontSize: "2.5rem",
              }}
            >
              "Monthly fees
              <br /> collection <br /> hua easy"
            </h2>
          </Col>
          <Col lg="6" sm="6" style={{ display: "flex", alignItems: "center" }}>
            <img src={OKLG7C0} alt="logo" width="100%" height="auto" />
          </Col>
        </Row>
      </Container>
      <div className="about" style={{ background: "#043d9e" }}>
        <Row>
          <h2 style={{ color: "#fff" }}>ABOUT THE COMPANY</h2>
          <h4 style={{ color: "#fff" }}>Key features of our company</h4>
          <Col lg="3" sm="12">
            <Card className="about-card">
              <FaUserAlt size={"3em"} />
              <CardBody>
                <CardTitle tag="h5">User Management</CardTitle>
                <CardText>
                  Businesses can create profile and can add subscription of all
                  its users from a single device. Collecting via cash or cheque?
                  Use our app to keep a track of it . Its all in one platform
                  for all your user management
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="12">
            <Card className="about-card">
              <FaWhatsapp size={"3em"} />
              <CardBody>
                <CardTitle tag="h5">Send payment reminders</CardTitle>
                <CardText>
                  Send timely reminders with payment link to all your due
                  customers via whatsapp and receive money directly in your
                  account
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="12">
            <Card className="about-card">
              <FaCloud size={"3em"} />
              <CardBody>
                <CardTitle tag="h5">Analytics</CardTitle>
                <CardText>
                  Real time data of all your users paid , unpaid, payment
                  received, payment pending and many more to showcase your
                  business performance
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="12">
            <Card className="about-card">
              <FaBrain size={"3em"} />
              <CardBody>
                <CardTitle tag="h5">Smart Communication</CardTitle>
                <CardText>
                  Our algorithm makes contact decisions by measuring the effect
                  of messages (opens, clicks, responses, etc.). If mail bounces,
                  an SMS is automatically sent, if you don't click on the
                  payment link, a WhatsApp is sent
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Container>
        <div style={{ margin: "3rem 0" }}>
          <Row>
            <h2>THE TEAM</h2>
            <h4>
              "We are a small team based out in lucknow,and passionate about
              building product for small businesses"
            </h4>
            <Col lg="4" sm="12">
              <Card>
                <CardImg top width="100%" src={shubham} alt="shubham" />
                <CardBody>
                  <CardTitle tag="h5">Shubham Yadav</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Co-Founder & CEO
                  </CardSubtitle>
                  <CardText>
                    MBA-Symbiosis Pune <br /> 3yr work ex working for startups{" "}
                    <br />
                    <MdEmail /> shubh28107@gmail.com
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" sm="12">
              <Card>
                <CardImg top width="100%" src={bhoop} alt="bhoop" />
                <CardBody>
                  <CardTitle tag="h5">Bhoop Narayan Singh</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Co-Founder & CPO
                  </CardSubtitle>
                  <CardText>
                    B.Tech-IIT Dhanbad <br /> 1yr work ex in L&T <br />{" "}
                    <MdEmail /> bhoopns16@gmail.com
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" sm="12">
              <Card>
                <CardImg top width="100%" src={abhi} alt="bhoop" />
                <CardBody>
                  <CardTitle tag="h5">Abhinandan Singh</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Co-founder & CTO
                  </CardSubtitle>
                  <CardText>
                    B.Tech-AIT Pune <br />
                    Full stack developer
                    <br />
                    <MdEmail /> abhinandans00778@gmail.com
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div style={{ width: "100%" }}>
        <Row className="stats" style={{ color: "#fff" }}>
          <Col lg="6" sm="6" className="stats-item">
            <h2>5</h2>
            <p>Partners</p>
          </Col>
          <Col lg="6" sm="6" className="stats-item">
            <h2>3500+</h2>
            <p>Users</p>
          </Col>
        </Row>
      </div>

      <Container>
        <Row>
          <h2>OUR WORK</h2>
          <h4>Our billpay app can be used by</h4>
        </Row>
        <Col lg="12" sm="12">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <td>
                  <b>Cabel Operators</b>
                </td>
                <td>
                  <b>Newspaper Vendor</b>
                </td>
                <td>
                  <b>Co-Curricular Club</b>
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>
                  <b>Coaching/Tution Classes</b>
                </td>
                <td>
                  <b>Gym</b>
                </td>
                <td>
                  <b>Sports Academy</b>
                </td>
              </tr>
            </thead>
          </table>
        </Col>
      </Container>
      <div className="pricing" style={{ color: "#fff" }}>
        <Row>
          <h2>PRICING</h2>
          <h1>"Enjoy the first month for free"</h1>
          <br />
          <br />
          <p className="price">2999/- for 6 months </p>
          <p className="price"> 4999/- for 12 months</p>
        </Row>
      </div>
      <div className="contact">
        <Row>
          <h2>CONTACT</h2>
          <h4>Lets get in touch. Send us a message</h4>
          <Col lg="12" sm="12">
            <div className="contact-item">
              <ImLocation2 /> LUCKNOW, India
            </div>
            <div className="contact-item">
              <FaPhoneAlt /> Phone:+917283014466
            </div>
            <div className="contact-item">
              <MdEmail /> Email:billpaytech21@gmail.com
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" style={{ display: "flex", justifyContent: "center" }}>
            <img src={logos} alt="logo" width="400px" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <p style={{ textAlign: "center" }}>
              Mangekyo Technology Private Limited, All Right Reserved, 2021
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ marginRight: 5 }}>Made in</p>
              <img src={india} alt="india" width={35} height={28} />
            </div>
          </Col>
        </Row>
      </div>

      <div className="social-media">
        <div className="social-item">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://m.facebook.com/BillPay-102195622210582/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={"3em"} color={"#fff"} />
            <p>Facebook</p>
          </a>
        </div>
        <div className="social-item">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://www.instagram.com/billpaytech/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={"3em"} color={"#fff"} />
            <p>Instagram</p>
          </a>
        </div>
        <div className="social-item">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://www.youtube.com/channel/UCzi1XJ4c9niNjieqCUA3JDg/videos"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={"3em"} color={"#fff"} />
            <p>Youtube</p>
          </a>
        </div>
        <div className="social-item">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://www.linkedin.com/company/billpaytech/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={"3em"} color={"#fff"} />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
