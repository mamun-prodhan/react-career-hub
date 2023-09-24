import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setJobApplication } from "../utility/localstorage";

const JobDetails = () => {
  const jobsData = useLoaderData();
  const jobId = useParams();
  const intJobId = parseInt(jobId.id);
  const job = jobsData.find((singleJob) => intJobId === singleJob.id);
  console.log(job);

  const handleApplyJob = () => {
    setJobApplication(intJobId);
    toast.success("You have applied successfully");
  };

  return (
    <div className="my-20">
      <h2 className="mb-72 text-3xl font-extrabold text-center">
        {job.job_title}
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
        {/* job details */}
        <div>
          <div className="p-8 bg-[#7E90FE] rounded-lg bg-opacity-10">
            <p className="py-6 border-b">Job Details</p>
            <p className="my-6">
              <span className="font-extrabold">Salary: </span>
              {job.salary} (Per Month)
            </p>
            <p className="mb-6">
              <span className="font-extrabold">Salary: </span>
              {job.salary} (Per Month)
            </p>
            <p className="font-extrabold pb-6 border-b">Contact Information</p>
            <p className="my-4">
              <span className="font-extrabold">Phone: </span>
              {job.contact_information.phone}
            </p>
            <p className="my-4">
              <span className="font-extrabold">Email: </span>
              {job.contact_information.email}
            </p>
            <p className="my-4">
              <span className="font-extrabold">Address: </span>
              {job.contact_information.address}
            </p>
          </div>
          <button
            onClick={handleApplyJob}
            className="mt-6 w-full bg-gradient-to-r hover:bg-gradient-to-l duration-300  from-[#7E90FE] to-[#9873FF] px-5 py-3 font-semibold text-[#FFF] rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
