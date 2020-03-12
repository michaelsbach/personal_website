import React from 'react';
import './components.css';


function Contact(){
return(
    <div id="contact-div">
        {/* <span className="contact-line"></span> */}
        <span className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="5.5em" height="5.5em" 
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <a href="mailto:m.sbach24@gmail.com" target="_blank" rel="noopener noreferrer">
                    <rect className="email-cover" x="0" y="0" width="448" height="512" fill="rgba(0,0,0,0)"/>
                    <path className="email" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333l8-5.333V8.7z" 
                        fill="#000000"/>
                </a>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="5em" height="5em" 
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                <a href="https://www.linkedin.com/in/michaelsbach/" target="_blank" rel="noopener noreferrer">
                    <rect className="linkedin-cover" x="0" y="0" width="448" height="512" fill="rgba(0,0,0,0)"/>
                    <path className="linkedin" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </a>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="5em" height="5em" 
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                <a href="https://github.com/michaelsbach/" target="_blank" rel="noopener noreferrer">
                    <rect className="github-cover" x="0" y="0" width="448" height="512" fill="rgba(0,0,0,0)"/>
                    <path className="github" d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63l51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69c-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101L8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" 
                        fill="#000000"/>
                </a>
            </svg>
        </span>
        {/* <span className="contact-line"></span> */}
    </div>
);
}

export default Contact;