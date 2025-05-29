import React from "react";

const PostCard = ({ item }) => {
  console.log(item);
  return (
    <div className="card bg-base-100 h-full shadow-sm py-6">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-24" src={item.company_logo} alt="Shoes" />
        </figure>
        <div>
          <p>{item.company}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">new</div>
        </h2>
        <p>{item.description}</p>
        <div className="card-actions">
          {item.requirements.map((skill, idx) => (
            <div key={idx} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
