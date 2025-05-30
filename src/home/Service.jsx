import React, { use } from "react";
import JobCard from "./JobCard";

const Service = () => {
  return (
    <>
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold">Hot jobs For You</h2>
        <p className="text-base-400 ">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <JobCard></JobCard>
    </>
  );
};

export default Service;
