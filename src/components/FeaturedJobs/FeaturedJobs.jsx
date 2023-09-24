import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDatalength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={jobs.length === dataLength ? "hidden" : "text-center mb-10"}
      >
        <button
          onClick={() => setDatalength(jobs.length)}
          className="mx-auto bg-gradient-to-r hover:bg-gradient-to-l duration-300  from-[#7E90FE] to-[#9873FF] text-[20px] px-5 py-3 font-bold text-[#FFF] rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
