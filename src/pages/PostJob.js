import React, { useState } from 'react';

function PostJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job post submission logic here
    console.log({ jobTitle, jobDescription });
  };

  return (
    <div className="post-job-container">
      <h1 className="text-center">Post a New Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          className="form-control mb-2"
        />
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
