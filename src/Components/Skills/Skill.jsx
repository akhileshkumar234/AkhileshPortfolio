
import './skill.scss';
export default function Work() {
  return (
    <div className='work' id='work'>
      <h1>Skills</h1>
      <br/>
      <div className="container1">
        <h3>Primary Skills</h3>
        <div className='primary1 container'>
          <p>
          <img src="assets/c++.png" width="100px" height='100px' className='topmar' alt="c++" />
          <i className="devicon-html5-plain spaceleft"></i>
          <i className="devicon-c-plain-wordmark colored spaceleft"></i>
          <i className="devicon-javascript-plain colored spaceleft"></i>
          <i className="devicon-css3-plain-wordmark colored spaceleft"></i>
          <i className="devicon-react-original colored spaceleft"></i>
          <br/>
          <i className="devicon-bootstrap-plain-wordmark colored spaceleft"></i>
          <i className="devicon-github-original-wordmark colored spaceleft"></i>
          <i className="devicon-vscode-plain colored spaceleft"></i>
          </p>
        </div>
        <br/>
        <h3>Basics</h3>
        <div className='secondary1 container-fluid'>
          <i className="devicon-mongodb-plain-wordmark colored spaceleft"></i>
          <i className="devicon-nodejs-plain-wordmark colored spaceleft"></i>
          <i className="devicon-mysql-plain-wordmark colored spaceleft"></i>
          <i className="devicon-java-plain-wordmark colored spaceleft"></i>
          <i className="devicon-python-plain-wordmark colored spaceleft"></i>
        </div>
      </div>
    </div>
  )
}
