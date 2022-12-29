import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiJest } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'

export default function ZMDB():JSX.Element {
    return (
        <>
        <section>
        <p className="project_title">ZMDB</p>
        <div className='project_buttons'>
            <button className='project_button-live' onClick={() => window.open("https://zmdb-official.netlify.app/", "_self")}>Live Site</button>
            <button className='project_button-code' onClick={() => window.open("https://github.com/maghfoor-a/zmdb-tv-shows", "_self")}>See The Code</button>
        </div>
        <p className="project_description">I developed ZMDB, a react web application that allows users to search for their favorite TV shows and filter episodes based on search criteria. I collaborated with a partner on this project as part of the Academy program, and we worked with an <b>API</b> to fetch and display data on the website. This project helped me enhance my React skills and gain experience with <b>unit testing</b> using Jest. I also had the opportunity to improve my team work and <b>Git</b> skills through the use of pull requests and branches in GitHub. Overall, this project was a valuable learning experience for me, providing an opportunity to work on a real-world project and develop skills in web development and <b>collaboration</b>.</p>
        </section>
        <section>
            <p className="project_subheading">TECH STACK</p>
            <div className="project_icons">
                <div className='single-icon'>
                <SiTypescript size={'3rem'} color={"#007acc"}/>
                <p className='project_icon-name'>TypeScript</p>
                </div>
                <div className='single-icon'>
                <SiReact size={'3rem'} color={"#61DBFB"}/>
                <p className='project_icon-name'>React</p>
                </div>
                <div className='single-icon'>
                <SiGithub size={'3rem'} color={"#171515"}/>
                <p className='project_icon-name'>GitHub</p>
                </div>
                <div className='single-icon'>
                <SiNodedotjs size={'3rem'} color={"#3c873a"}/>
                <p className='project_icon-name'>NodeJs</p>
                </div>
                <div className='single-icon'>
                <SiHtml5 size={'3rem'} color={"#e34c26"}/>
                <p className='project_icon-name'>HTML</p>
                </div>
                <div className='single-icon'>
                <SiCss3 size={'3rem'} color={"#264de4"}/>
                <p className='project_icon-name'>CSS</p>
                </div>
                <div className='single-icon'>
                <SiNetlify size={'3rem'} color={"#00AD9F"}/>
                <p className='project_icon-name'>Netlify</p>
                </div>
                <div className='single-icon'>
                <SiJest size={'3rem'} color={"#C53D14"}/>
                <p className='project_icon-name'>Jest</p>
                </div>
            </div>
        </section>
        </>
    )
}