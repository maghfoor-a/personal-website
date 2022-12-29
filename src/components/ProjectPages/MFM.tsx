import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiJest } from 'react-icons/si'


export default function MFM():JSX.Element {
    return (
        <>
        <section>
        <p className="project_title">MY FAVOURITE MEDIA</p>
        <div className='project_buttons'>
            <button className='project_button-live' onClick={() => window.open("https://myfavouritemedia.maghfoor.com/", "_self")}>Live Site</button>
            <button className='project_button-code' onClick={() => window.open("https://github.com/maghfoor-a/my-favourite-media", "_self")}>See The Code</button>
        </div>
        <p className="project_description">I developed a React web application that utilizes the <b>Spotify API</b> to allow users to search for artists and their albums, and to save their favorite albums. The goal of the app was to provide a simple and intuitive solution for storing and organizing music, as existing options did not meet my needs. The app leverages the Spotify API to offer a comprehensive and user-friendly experience for music enthusiasts.</p>
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