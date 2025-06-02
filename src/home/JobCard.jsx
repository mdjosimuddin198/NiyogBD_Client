import React, { use, useEffect, useState } from "react";
import { HoverEffect } from "../components/UI_commponents/Card_hover_effect";

// const postDataPromise = fetch("http://localhost:3000/jobs").then((res) =>
//   res.json()
// );

const JobCard = () => {
  const [jobs, setJobs] = useState([]);

  // const jobs = use(postDataPromise);

  useEffect(() => {
    const postDataPromise = async () => {
      const res = await fetch("http://localhost:3000/jobs");
      const data = await res.json();
      setJobs(data);
    };

    postDataPromise();
  }, []);
  // const { title, description, location, requirements, company_logo } = job;
  return (
    <div className="max-w-5xl mx-auto py-7">
      <HoverEffect items={jobs} />
    </div>
  );
};

export default JobCard;
