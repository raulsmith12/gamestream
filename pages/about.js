import React from 'react';
import {
    Jumbotron,
	Container,
	Row,
	Col
} from 'reactstrap';

const About = props => (
	<div>
	    <Jumbotron className="jumbo-blk">
	        <h1>About GAMEstream</h1>
	    </Jumbotron>
	    <Container>
            <Row>
                <Col className="border-dashed px-3 py-2">
                    <h3 className="typing-effect text-center">What is GAMEstream?</h3>
                    <p className="body-fade">Simply put, GAMEstream is a streaming channel on YouTube, Facebook Live, and Twitch, dedicated to playing fun and exciting games. These games can be from the retro Nintendo games such as Ms. Pac-Man and Mega Man to classics like Portal and Tetris to even more modern hits like Call of Duty and Just Cause.<br /><br />
					GAMEstream is provided fun entertainment by streaming games such as Just Cause 3, Mega Man 2, Bloodborne, Everything, Portal, inFamous: Second Son, and others.</p>
                </Col>
            </Row>
			<Row className="mt-5">
				<Col className="border-dashed px-3 py-2">
					<h3>Who is Owl?</h3>
					<Container>
						<Row>
							<Col md="4">
								<img src="https://therealgamestream.com/img/Owl-profile.jpg" width="95%" alt="Owl" className="border-dashed" />
							</Col>
							<Col md="8">
								<p>"Well the truth is I'm essentially an 80s kid trapped inside a grown man's body. Yes, I have responsibilities like any respectable member of society does. I have kids, I have a job, I have a business, and I take my duties seriously. But at the same time, I love to game. I love to have fun. I love to reference 80s shows and movies in just about everything I do. Chances are if there's a one-liner from a hit movie or TV show from the 80s, it's been used in my streams.<br /><br />
								"I love video games and I love the tech and thought that goes into them. I have all the respect in the world for game developers and testers. I hope that my small contribution to the game streaming community will help bring at least one smile to one face."<br /><br />
								- Owl</p>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
	    </Container>
	</div>
);

export default About;