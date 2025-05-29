import React, { use } from "react";
import { HoverEffect } from "../components/UI_commponents/Card_hover_effect";
const postDataPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);

const JobCard = () => {
  const jobs = use(postDataPromise);
  // const { title, description, location, requirements, company_logo } = job;
  return (
    <div className="max-w-5xl mx-auto py-7">
      <HoverEffect items={jobs} />
    </div>
  );
};

export default JobCard;
