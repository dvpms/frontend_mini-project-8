import React from "react";
import { useParams } from "react-router-dom";

const OurWorksDetail = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-50 h-screen">
      <h2>OurWorksDetail: {id}</h2>
      asdfasdf
    </div>
  );
};

export default OurWorksDetail;
