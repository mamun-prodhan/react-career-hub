import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobsData = useLoaderData();
  const jobId = useParams();
  const intJobId = parseInt(jobId.id);
  const job = jobsData.find((singleJob) => intJobId === singleJob.id);
  console.log(job);

  return (
    <div className="my-20">
      <h2 className="mb-72 text-3xl font-extrabold text-center">
        Job Details of {job.id}
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <p>
            <span className="font-extrabold">Job Description:</span>
            {job.job_description}
          </p>
          <p className="my-6">
            <span className="font-extrabold">Job Responsibility:</span>
            {job.job_responsibility}
          </p>
          <p className="font-extrabold  mb-4">
            Job Responsibility: <br />
          </p>
          <p>{job.educational_requirements}</p>
          <p className="font-extrabold  mb-4 mt-6">
            Job Responsibility: <br />
          </p>
          <p>{job.educational_requirements}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default JobDetails;
