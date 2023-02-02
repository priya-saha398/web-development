import React, { Fragment } from "react";

let Data = [
  {
    fullName: "Priya",
    Age: "23",
    address: [
      {
        permanentAddress: "konabari",
        presentAddress: "Dhaka",
        phone: [
          {
            cellPhone: "01......",
            telephpne: "0918.......",
          },
        ],
      },
    ],
  },
  {
    fullName: "riya",
    Age: "20",
    address: [
      {
        permanentAddress: "bari",
        presentAddress: "Gazipur",
        phone: [
          {
            cellPhone: "01......",
            telephpne: "0918.......",
          },
        ],
      },
    ],
  },
];
export default function PracticeTwoMapp() {
  console.log(Data);
  return (
    <Fragment>
      <div>
        <h1>Personal Information</h1>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.fullName}</h1>
              <p>{item.Age}</p>
              {item.address.map((user, index) => {
                const { permanentAddress, presentAddress } = user;
                return (
                  <Fragment key={index}>
                    <p>{permanentAddress}</p>
                    <p>{presentAddress}</p>
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
