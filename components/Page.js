import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-138044372-4');

class Page extends Component {

	render() {
    	return (
    		<React.Fragment>
        		<Meta />
                <Header />
				<Container fluid className="main-header px-0 page">
					{this.props.children}
				</Container>
                <Footer />
			</React.Fragment>
    	);
	}
}

export default Page;
