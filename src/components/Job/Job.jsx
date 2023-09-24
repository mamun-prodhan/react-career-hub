import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

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
        <div className="flex items-center gap-6 mt-4">
          <p className="flex items-center">
            <MdLocationOn className="text-2xl me-2"></MdLocationOn>
            {location}
          </p>
          <p className="flex items-center">
            <AiOutlineDollar className="text-2xl me-2"></AiOutlineDollar>
            {salary}
          </p>
        </div>
        <div className="card-actions">
          <button className="bg-gradient-to-r hover:bg-gradient-to-l duration-300  from-[#7E90FE] to-[#9873FF] text-[20px] px-5 py-3 font-bold text-[#FFF] rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
