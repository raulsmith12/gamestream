import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Alert, ButtonToggle } from 'reactstrap';

const Footer = () => {
	const [count, setCount] = useState(0);

    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
        setCount(count + 1);
	}
	
	return (
		<div>
			<Container fluid className="bg-dark text-white fixed-bottom">
				<p align="center">
					<Link href="/"><a className="text-white">Home</a></Link>&nbsp;|&nbsp;
					<Link href="/contact/"><a className="text-white">Contact</a></Link>&nbsp;|&nbsp;
					<Link href="/privacy-policy/"><a className="text-white">Privacy Policy</a></Link>
					<br />
					&copy; {(new Date().getFullYear())} GAMEstream. All rights reserved.
					<br />
					<img src="https://therealgamestream.com/img/owl.png" height="50" alt="GAMEstream Owl" border="0" />
				</p>
			</Container>
			{count == 0 &&
				<Alert className="privacy-alert fixed-bottom" isOpen={visible} toggle={onDismiss}>
					<h4 className="alert-heading">Our Commitment to Your Privacy</h4>
					<p>
						Pac-Man has his pellets, we have our cookies. That said, your privacy is very important to us and we want to make sure you are aware this site uses cookies. Please see our privacy policy for details.
						<ButtonToggle color="warning" onClick={onDismiss}>OKAY</ButtonToggle>{' '}
					</p>
				</Alert>
			}
		</div>
	)
}

export default Footer;
