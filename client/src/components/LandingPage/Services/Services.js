import React from "react";
import mobile from "../../../images/icons/service1.png";

const Services = () => {
  return (
    <div className="my-18">
      <div>
        <h1 className="text-center text-2xl font-semibold mb-12 ">
          Provide Awesome <span className="text-green-300">Service</span>
        </h1>
      </div>
      <div class="flex flex-col md:flex-row gap-8 justify-center items-center ">
        <div class="rounded-sm hover:shadow-xl m-10 p-10">
          <div className="flex flex-col gap-2 justify-center item-center ">
            <div className="flex justify-center items-center">
              <img src={mobile} alt="" width={100} />
            </div>
            <h1 className="text-center font-bold text-2xl">
              Web && Mobile Design
            </h1>
            <p className="text-center m-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo
              quas optio? Nesciunt aspernatur, dicta eum nisi aperiam officia
              excepturi!
            </p>
          </div>
        </div>
        <div class="rounded-sm hover:shadow-xl m-10 p-10">
          <div className="flex flex-col gap-2 justify-center item-center ">
            <div className="flex justify-center items-center">
              <img src={mobile} alt="" width={100} />
            </div>
            <h1 className="text-center font-bold text-2xl">Graphic Design</h1>
            <p className="text-center m-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo
              quas optio? Nesciunt aspernatur, dicta eum nisi aperiam officia
              excepturi!
            </p>
          </div>
        </div>
        <div class=" rounded-sm hover:shadow-xl m-10 p-10">
          <div className="flex flex-col gap-2 justify-center item-center ">
            <div className="flex justify-center items-center">
              <img src={mobile} alt="" width={100} />
            </div>
            <h1 className="text-center font-bold text-2xl">Web Development</h1>
            <p className="text-center m-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo
              quas optio? Nesciunt aspernatur, dicta eum nisi aperiam officia
              excepturi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
