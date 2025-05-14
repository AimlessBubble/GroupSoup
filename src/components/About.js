import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div>
      <img src={require('../images/SoupOverlay.png')} id='SoupLay'></img>
      <h1 className='AboutHeader text-right'> BUILDING THE RECIPE <br/> FOR COMMUNITY </h1>
      <p className='AboutText text-right'> Doom scrolling comes with an <br/> aftertaste, this is the story of how <br/> we plan to take online searches to <br/> real-life community through <br/> GroupSoup. <br/> <br/> <br/> <br/> <br/><br/> <br/> </p>
      <h1 className='AboutHeader text-center'> HOW IT ALL STARTED </h1>
      <p className='AboutText text-center'> GroupSoup was created to solve a common problem: finding in-person community groups shouldn’t be so difficult. After struggling to locate a local spoken-word poetry group, founder Zevez envisioned a platform that makes it easy to discover and connect with real-world communities. GroupSoup bridges online discovery with offline connection through an interactive map, tailored recommendations, and features that promote meaningful in-person engagement. By partnering with local businesses and community hubs, GroupSoup turns everyday places into gathering points for people with shared interests — making it simple to find your people and be present when you do.</p>
      <h1 className='AboutHeader text-center'> OUR MISSION </h1>
      <p className='AboutText text-center'> GroupSoup’s mission is to bridge the gap between online discovery and real-world connection by making it effortless to find, join, and engage with local groups, clubs, and communities — while helping Rochester’s small businesses thrive by turning everyday spaces into active community hubs and driving meaningful foot traffic to their locations.</p>
      <h1 className='AboutHeader text-center'> MEET THE TEAM </h1>
      <p className='AboutText text-left'> Zevez Zalay (they/them), founder and Creative Designer of GroupSoup, first sketched the concept on a sticky note in the summer of 2023 after spending an entire day searching for a local spoken-word poetry group in Rochester, NY. Beyond their work on the startup, Zevez is a double major in Finance and Marketing at the Rochester Institute of Technology (RIT). A creative at heart, they channel their artistic instincts into crafting visuals for marketing campaigns and shaping big-picture ideas that drive GroupSoup’s initiatives forward.</p>
      <p className='AboutText text-left'> Nathan Jackson (he/him), founder and Technical Designer of GroupSoup, met Zevez shortly after the summer of 2023. As a Software Engineering major at RIT and someone who grew up moving often, Nathan understood firsthand the challenge of finding real-life community — a perspective that fueled both his passion and the technical expertise GroupSoup needed to come to life. Outside the startup, Nathan is an avid gamer, drawn to the strategy and problem-solving that turn ideas into victories — a mindset that continues to help shape GroupSoup from the sticky note it started as. </p>
      <p className='AboutText text-left'> Sage Sager (they/them), founder and Systems Designer of GroupSoup, became the third member of the founding team after meeting Zevez and Nathan at an event exploring the intersections of AI and consciousness. A student in RIT’s School of Individualized Study (SOIS), Sage concentrates on Political Science, Philosophy, AI, and Data Science. They bring a systems-thinking approach to GroupSoup, helping reimagine how communities are built and sustained in Rochester. Through their interdisciplinary focus and passion for social systems, Sage ensures that GroupSoup isn’t just another addition to Rochester’s landscape — but a force for positive, lasting cultural transformation.</p>
    </div>
  );
}

export default About;