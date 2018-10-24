import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
				<Container>
					<Row>
						<Col xs='3'>
							<Button href={"https://postmates.com/merchant/zachs-shack-portland"} color="secondary">Order Here</Button>
						</Col>
						<Col xs='9' className="socialIcons">
							<a href="https://www.yelp.com/biz/zachs-shack-portland"><span className="footer-icon icon fa fa-yelp desktop-only"></span></a>
							<a href="https://www.facebook.com/ZachsShackHotdogs/"><span className="footer-icon icon fa fa-facebook-square desktop-only"></span></a>
							<a href="https://www.instagram.com/explore/locations/227503863/zachs-shack/"><span className="footer-icon icon fa fa-instagram desktop-only"></span></a>
						</Col>
					</Row>
					<Row>
						<Col>
							<Container>
								<Row>
									<Col>
										<a href="/"><h1>LLB</h1></a>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col md="3"></Col>
						<Col>
							<a href="/menu">Menu</a>
						</Col>
						<Col>
							<a href="/about">About</a>
						</Col>
						<Col>
							<a href="/contact">Contact</a>
						</Col>
						<Col md="3"></Col>
					</Row>
				</Container>
			</div>
    );
  }
}
NavBar.defaultProps = {
  className: "",
}
export default NavBar;
