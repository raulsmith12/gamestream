import React from 'react';
import {
    Jumbotron,
	Container,
	Row,
	Col
} from 'reactstrap';
import ContactForm from '../components/Form';

const Contact = () => (
	<div>
	    <Jumbotron className="jumbo-blk">
	        <h1>Contact GAMEstream</h1>
	    </Jumbotron>
	    <Container>
			<Row>
				<Col>
					<ContactForm />
				</Col>
			</Row>
	    </Container>
	</div>
);

export default Contact;