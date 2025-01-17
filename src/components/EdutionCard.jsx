import React from 'react';
import {
	Card,
	CardBody,
	Badge
} from "reactstrap";


import { Fade } from 'react-reveal';

const EdutionCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							{
								!!education.description &&
								<p className="description mt-3">
									<ul>
										{education.description.map(desc => (
											<li >{desc.title}</li>
										))}
									</ul>
								</p>
							}

						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
}

export default EdutionCard;