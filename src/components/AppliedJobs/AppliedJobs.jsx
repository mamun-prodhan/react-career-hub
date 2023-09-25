import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    console.log(storedJobIds);
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1>Total Jobs: {jobs.length}</h1>
      <h2>Jobs I Applied for Career Growth</h2>
    </div>
  );
};

export default AppliedJobs;
