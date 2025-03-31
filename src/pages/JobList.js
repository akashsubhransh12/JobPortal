import React, { useState } from "react";

function JobList() {
  const jobPosts = [
    { title: "Software Engineer", company: "Google", location: "New York", link: "https://careers.google.com/jobs/results/" },
    { title: "Data Scientist", company: "Microsoft", location: "San Francisco", link: "https://careers.microsoft.com/us/en" },
    { title: "Product Manager", company: "Amazon", location: "Seattle", link: "https://www.amazon.jobs/en/" },
    { title: "Frontend Developer", company: "Netflix", location: "Los Angeles", link: "https://jobs.netflix.com/" },
  ];

  const [search, setSearch] = useState("");

  const filteredJobs = jobPosts.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-4">Latest Job Listings</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search jobs by title, company, location..."
        className="w-full p-2 mb-4 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition">
              <h2 className="font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
              <a 
                href={job.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-bold hover:underline mt-2 block"
              >
                Apply Now →
              </a>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No matching jobs found.</p>
        )}
      </ul>
    </div>
  );
}

export default JobList;
