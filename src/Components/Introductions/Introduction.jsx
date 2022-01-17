import { useEffect, useRef } from 'react';
import './introduction.scss';
import { init } from 'ityped';

export default function Introduction() {
    const textref = useRef()
    useEffect(() => {

        init(textref.current,
            {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 90,
                strings: ['Competitive Programmer', 'Web developer', 'MERN Developer']
            })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imagecontainer">
                    <img src="assets/akhil.png" alt="akhilesh" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, There I'm</h2>
                    <h1>Akhilesh Kumar</h1>
                    <h3>Coder : <span ref={textref}></span></h3>
                  
                </div>
                <a href="#portfolio">
                    <img src="assets/downarrow.png" alt="downarrow" />
                </a>

            </div>
        </div>
    )
}
