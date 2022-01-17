
import './experience.scss';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
   
export default function Testimonial() {
    return (
        <div className='testinomy' id='testimony'>
            <h1>Experience</h1>
            <div className='expmargin'>
            <CardGroup>
                <Card className='marbetcard mycss'>
                    <CardImg top width="100%" height='150px' src="https://media-exp1.licdn.com/dms/image/C560BAQE5SlcIblxirQ/company-logo_200_200/0/1625905444964?e=1650499200&v=beta&t=H8BzpNUcLbOuS148iM4TaDvqcIpap3q8BcZO-LWPNps" alt="Card image cap" />
                    <CardBody>
                        <CardTitle className='cardfont'>FTS</CardTitle>
                        <CardSubtitle className='titlesubsize'>Web Development Internship</CardSubtitle>
                        <p>15th Aug 2021 to 01st Oct 2021</p>
                        <CardText>I have contributed as a frontend as well as backend developer using HTML, CSS, JS, APIs, Nodejs, Mongodb etc.</CardText>
                        <a href="https://drive.google.com/file/d/1w96B4NMBTS8YFWzRPJU4DKgonPTdp7GQ/view?usp=sharing" target='_blank' rel="noreferrer"><Button className='btncol'>Certificate</Button></a>
                    </CardBody>
                </Card>
                <Card className='marbetcard mycss'>
                    <CardImg top width="100%" height='150px' src="http://codingclubnitm.tech/logo.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle className='cardfont'>Coding Club NITM</CardTitle>
                        <CardSubtitle className='titlesubsize'>Team Member</CardSubtitle>
                        <p>01st Feb 2021 to 25th Oct 2021</p>
                        <CardText>I have contributed in club website as frontend as well as backend and also contributed in orgsnizing coding contest.</CardText>
                        <a href="http://codingclubnitm.tech/Team%20Page/team.html" target='_blank' rel="noreferrer"><Button className='btncol'>More..</Button></a>
                    </CardBody>
                </Card>
                <Card className='marbetcard mycss'>
                    <CardImg top width="100%" height='150px' src="http://codingclubnitm.tech/logo.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle className='cardfont'>Coding Club NITM</CardTitle>
                        <CardSubtitle className='titlesubsize'>Competitive Programming Head</CardSubtitle>
                        <p>26th Oct 2021 - Present</p>
                        <CardText>We have to manage all the events related to competitive programming like organizing contest, DSA lecture series etc.</CardText>
                        <a href="http://codingclubnitm.tech/Team%20Page/team.html" target='_blank' rel="noreferrer"><Button className='btncol'>More..</Button></a>
                    </CardBody>
                </Card>
            </CardGroup>
            </div>
        </div>
    )
}
