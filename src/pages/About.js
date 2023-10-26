import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1>About pages</h1>
      <ul>
        <li><Link to="/about/abouttc">Technical skills</Link></li>
        <li><Link to="/about/aboutme">About Me</Link></li>
        <li><Link to="/about/aboutntc">Non-Technical Skills</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default About
