import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col
} from 'reactstrap';

const Home = props => (
	<div>
	    <Jumbotron className="bg-dark">
	        <img src="https://therealgamestream.com/img/gamestream-logo-bright.png" width="100%" />
	    </Jumbotron>
	    <Container>
            <Row>
                <Col className="border-dashed px-3 py-2">
                    <h3 className="typing-effect text-center">It Was a Dark Time...</h3>
                    <p className="body-fade">The Empire had taken over the galaxy. Darth Vader was slaying would-be fools. The Demigorgon had captured Eleven and her crew. The only hope left was a soulless ginger-bearded dragon named Owl.<br /><br />
                    Welcome to GAMEstream, the website home of the fastest-rising YouTube and Twitch channel around! Come watch as Owl, a gamer/ father/ computer nerd/ 80s movie geek, tackles all kinds of games, from shooters to platformers, retro to modern, and all in between.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="border-dashed px-3 py-2">
                    <h3 className="text-center">Come Follow GAMEstream</h3>
                    <Container>
                        <Row>
                            <Col md="4" className="text-center">
                                <a href="https://youtube.com/channel/UCUcA2n8ktE6ezeNgItGnftw" target="_blank">
                                    <img src="https://therealgamestream.com/img/youtube.jpg" height="120" alt="YouTube" border="0" />
                                </a>
                            </Col>
                            <Col md="4" className="text-center">
                                <a href="https://facebook.com/GAMEstreamOWL" target="_blank">
                                    <img src="https://therealgamestream.com/img/facebook.png" height="120" alt="Facebook" border="0" />
                                </a>
                            </Col>
                            <Col md="4" className="text-center">
                                <a href="https://twitch.tv/owlthegeek" target="_blank">
                                    <img src="https://therealgamestream.com/img/twitch-logo.png" height="120" alt="Twitch" border="0" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
	    </Container>
	</div>
);

export default Home;