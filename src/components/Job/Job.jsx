import React from "react";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border">
      <figure>
        <img className="pt-8" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="me-4 font-extrabold px-5 py-2 border border-[#7E90FE] text-[#7E90FE] rounded-md">
            {remote_or_onsite}
          </button>
          <button className="me-4 font-extrabold px-5 py-2 border border-[#7E90FE] text-[#7E90FE] rounded-md">
            {job_type}
          </button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
