import React, { use } from "react";
import JobCard from "../home/JobCard";

// const postDataPromise = fetch("http://localhost:3000/jobs").then((res) =>
//   res.json()
// );

const Service = () => {
  // const jobs = use(postDataPromise);
  // console.log(jobs);
  return (
    <>
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold">Popular Services</h2>
        <p className="text-base-400 ">
          Most viewed and all-time top-selling services
        </p>
      </div>
      <JobCard></JobCard>
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div> */}
    </>
  );
};

export default Service;
