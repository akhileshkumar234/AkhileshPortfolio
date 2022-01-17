import './menu.scss';

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen&& "active")}>
            <ul>
                <li onClick={()=>{setMenuOpen(false)}}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>{setMenuOpen(false)}}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=>{setMenuOpen(false)}}>
                    <a href="#work">Skills</a>
                </li >
                <li onClick={()=>{setMenuOpen(false)}}>
                    <a href="#testimony">Experience</a>
                </li>
                <li onClick={()=>{setMenuOpen(false)}}>
                    <a href="#contact">Contact</a>
                </li>
                <li className='colorcv' onClick={()=>{setMenuOpen(false)}}>
                    <a href="https://drive.google.com/file/d/1Xe7lNWsy3-vbZHeM8ecgDf5dvWVQK-pS/view?usp=sharing" target='_blank' rel='noreferrer'>Get CV</a>
                </li>
            </ul>
        </div>
    )
}
