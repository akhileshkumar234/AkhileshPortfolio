
import "./navbar.scss"
import { Person,Mail } from "@material-ui/icons"
export default function Navbar({menuOpen,setMenuOpen}) {
    return (
        <div className={'nav1 '+(menuOpen&& "active1")} id="nav">
            <div className="wrapper1">
                <div className="left1">
                    <a  href="#intro" className="logo">Coder.</a>
                    <div className="container1">
                        <Person className="icon1" /> 
                        <span>+917073314407</span>
                        <Mail className="icon1"/>
                        <span>akhilesh13062001@gmail.com</span>
                    </div>
                </div>
                <div className="right1">
                   <div className="containerright1" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
