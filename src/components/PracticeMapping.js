import React, { Fragment } from "react";
const Data = [
  {
    fulname: "Priya Saha",
    Age: "20",
    address: [
      {
        permanentAddress: "konabari,Gazipur",
        presentAddress: "Mohakhali,Dhaka",
      },
    ],
  },
  {
    fulname: "dipika Saha",
    Age: "27",
    address: [
      {
        permanentAddress: "Sherpur",
        presentAddress: "Uttara,Dhaka",
      },
    ],
  },
  {
    fulname: "Riya Saha",
    Age: "15",
    address: [
      {
        permanentAddress: "konabari,Gazipur",
        presentAddress: "konabari,Gazipur",
      },
    ],
  },
];

export default function PracticeMapping() {
  console.log(Data);
  return (
    <div>
      <h1>hello wrold</h1>
      {Data.map((user, index) => {
        const { fulname, age, address } = user;
        return (
          <Fragment>
            <article key={index}>
              <h1>{fulname}</h1>
              <p>{age}</p>

              {address.map((item, index) => {
                const { permanentAddress, presentAddress } = item;
                return (
                  <Fragment>
                    <div key={index}>
                      <h1>{permanentAddress}</h1>
                      <h1>{presentAddress}</h1>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </Fragment>
        );
      })}
    </div>
  );
}
