import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const PostCard = ({ item }) => {
  // console.log(item);
  const {
    _id,
    company_logo,
    company,
    location,
    title,
    description,
    requirements,
    jobType,
    salaryRange,
  } = item;

  return (
    <div className="card bg-base-100 h-full shadow-sm py-6">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-24" src={company_logo} alt={title} />
        </figure>
        <div>
          <p>{company}</p>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, idx) => (
            <div key={idx} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p>salaryRange: {`${salaryRange.min}-${salaryRange.max}`} ৳ </p>
          <Link
            to={`/application${_id}`}
            className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-primary"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
