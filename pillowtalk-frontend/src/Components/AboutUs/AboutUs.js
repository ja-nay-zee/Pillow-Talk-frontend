import React from 'react';
import "./AboutUs.style.css";

function AboutUs(){
  return(
    <div>
      <h1 id="header1">Who Created PillowTalk?</h1> 
      <p id="creators">London Rosemary and Yaneizy Castillo are the creators of PillowTalk! They are two Flatiron School students, who were required to create a project for phase 4 incorporating Ruby on Rails and React JavaScript. The back-end is solely based on Ruby on Rails and the front-end is React JavaScript. It took them a total of 4 days to complete this!</p>

      <img id="londonpic"src="https://i.imgur.com/Xjas03d.png" alt="londonpic"/>

      <img id="yaneizypic"src="https://i.imgur.com/BT5mZXv.jpg" alt="yaneizypic"/>
    
      <h1 id="header2">What is PillowTalk?</h1> 
      <p id="description">PillowTalk is the best free journal entry app that enables you to write down your dreams before they become vague memories. You can secure your dreams, thoughts, emotions, with this 3 in 1 app which is a journal, a diary, and a note-taking tool. There are many reasons to use PillowTalk and the most important one is that a dream entry is a private space of yours where you can write whatever dream you want to!</p>

      <h1 id="header3">FAQs:</h1> 
      <h2 id="question1">Is my account protected?</h2>
      <p id="answer1">PillowTalk gives you a password-protected account! If you forget your password, you can also reset it.</p>

      <h2 id="question2">Can I comment on anyone’s account?</h2>
      <p id="answer2">Yes! To comment, you have to create a PillowTalk account. If a dream entry is public or published through your friends, you can comment.</p>

      <h2 id="question3">How many ratings did PillowTalk get?</h2>
      <p id="answer3">PillowTalk received 2 awards and 4.5/5 stars!</p>

      <h2 id="question4">When did PillowTalk come out?</h2>
      <p id="answer4">PillowTalk was up and running on October 29, 2021.</p>

      <h2 id="thankyou"> Thank you for using our app! </h2>
      <h3 id="end">Happy dreaming…unless they’re nightmares! -London Rosemary and Yaneizy Castillo </h3>

      <img id="aboutUsLogo"src="https://image.freepik.com/free-vector/evening-cloudy-sky-purple-background-with-group-cumulus-cirrus-clouds-flat-cartoon-illustration_1284-62768.jpg" alt="aboutUsLogo"/>
    </div> 
  );
}

export default AboutUs;