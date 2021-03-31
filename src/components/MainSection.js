import React from 'react'

/* Components */
import MainMenuItem from './MainMenuItem'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

/* Images */
import portfolio from '../images/portfolio.png';
import profile from '../images/profile.png'
import resume from '../images/resume.png'
import contact from '../images/contact.png'
/* import avatar from '../images/photo.png' */

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
/* Define icons */
const envelope = <FontAwesomeIcon icon={faPaperPlane} />
const marker = <FontAwesomeIcon icon={faMapMarker} />
const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

/* Information */
var name = "Chaz L.";
var jobtitle = "Software Engineer";
var company = "Intersev";

export default function MainSection() {
    return (
        <>
        <div className="MainSection">
            <body className="App-body">
                {/* Avatar image */}
                {/*<img className="Avatar" src={avatar} alt="MainMenuItem" /> // Profile image*/}

                {/* Title and tagline section */}
                <MainHeader
                  name={ name }
                  jobtitle={ jobtitle }
                  company={ company }
                  icon1={ github } 
                  icon2={ linkedin }
                />
        
                {/* Main menu items list */}
                <div className="MainMenuList">
                  <MainMenuItem image={profile} subtext="Profile" id="ProfileSection"/>
                  <MainMenuItem image={portfolio} subtext="Projects" id="ProjectsSection"/>
                  <MainMenuItem image={resume} subtext="Resume" link="/dl/Resume.pdf" target="_blank"/>
                  <MainMenuItem image={contact} subtext="Contact" link="mailto:contact@caz-dev.com?subject=Contact from chaz.page" />
                </div>

                {/* Footer */}
                <MainFooter 
                  icon1={ envelope } 
                  icon2={ marker }
                />
            </body>
        </div>
        </>
    )
}
