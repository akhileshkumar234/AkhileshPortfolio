import './project.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardImg,CardBody,CardTitle,Card,CardSubtitle,CardText,Button,CardGroup} from 'reactstrap';
// import PortfolioList from '../PortfolioLists/PortfolioList';
// import { useState } from 'react';

export default function Portfolio() {

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Projects</h1>
            <CardGroup className='sizing'>
                <Card className='mx-2 my-2 mycss'>
                    <CardImg
                        alt="Card image cap"
                        src="assets/coding.png"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='titlesize'>
                            Coding Club NIT Meghalaya
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted titlesubsize"
                            tag="h6"
                        >
                            By using Nodejs, HTML, CSS, JS, MongoDB, Postman
                        </CardSubtitle>
                        <CardText>
                        Coding Club NIT Meghalaya conducts regular activities throughout the year like coding contests, DSA lecture series, workshops and industrial talks etc.
                        </CardText>
                        <a href="http://codingclubnitm.tech/" target="_blank" rel="noreferrer"><Button className='btncol'>Visit</Button></a>
                    </CardBody>
                </Card>
                <Card className='mx-2 my-2 mycss'>
                    <CardImg
                        alt="Card image cap"
                        src="assets/covid.png"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='titlesize'>
                            Covid19 Tracker
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted titlesubsize"
                            tag="h6"
                        > 
                            By using ReactJS, HTML, CSS, JS
                        </CardSubtitle>
                        <CardText>
                            This is a covid-19 tracker website. Here you can see the active cases, total number of cases etc.
                        </CardText>
                        <a href="https://github.com/akhileshkumar234/Covid-19-Tracker/tree/master" target="_blank" rel="noreferrer"><Button className='btncol'>Source Code</Button></a>
                    </CardBody>
                </Card>
                
                <Card className='mx-2 my-2 mycss'>
                    <CardImg
                        alt="Card image cap"
                        src="assets/tutorial.png"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='titlesize'>
                            UG Tutorial
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted titlesubsize"
                            tag="h6"
                        >
                            By using HTML,CSS,Bootstrap,JS,MongoDB,NodeJS
                        </CardSubtitle>
                        <CardText>
                        This is a tutorial website for undergraduate students.
                        </CardText>
                        <a href="https://github.com/akhileshkumar234/UG_Tutorial/tree/master" target="_blank" rel="noreferrer"><Button className='btncol'>Source Code</Button></a>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}
