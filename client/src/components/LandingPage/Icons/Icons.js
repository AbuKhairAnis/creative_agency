import React from "react";
import airbbn from "../../../images/logos/airbnb.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";


const Icons = () => {
  return (
    <div className="m-12 p-12">
      <div className="flex sm:flex-col md:flex-col lg:flex-row gap-8  justify-center items-center m-auto " >
        <div className="basis-1/5"><img height={150} width={150} src={google} alt="" /></div>
        <div className="basis-1/5"><img height={150} width={150} src={netflix} alt="" /></div>
        <div className="basis-1/5"><img height={150} width={150} src={slack} alt="" /></div>
        <div className="basis-1/5"><img height={150} width={150} src={airbbn} alt="" /></div>
        <div className="basis-1/5"><img height={150} width={150} src={uber} alt="" /></div>
      </div>
    </div>
  );
};

export default Icons;
