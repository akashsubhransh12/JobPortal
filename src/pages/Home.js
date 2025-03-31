import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-container text-center">
      <h1 className="home-heading">Welcome to the Job Portal</h1>
      <p className="home-description">Find your dream job or post your job openings easily.</p>
      <div className="media-container">
        <img src="/images/job-portal.jpg" alt="Job Portal" className="img-fluid" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Job Portal Introduction"></iframe>
      </div>
      <Button variant="primary" href="/jobs">Explore Jobs</Button>
    </div>
  );
}

export default Home;
