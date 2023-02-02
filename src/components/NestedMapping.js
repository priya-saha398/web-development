import React, { Fragment } from "react";

const info = [
  {
    fullName: "Priya Saha",
    age: "20",
    address: [
      {
        presentAddress: "MohaKhali",
        permanentAddress: "konabari",
        phone: [
          {
            number1: "01822997776",
            number2: "01636598765",
          },
        ],
      },
    ],
  },
  {
    fullName: "Dipika Saha",
    age: "27",
    address: [
      {
        presentAddress: "Uttara,Dhaka",
        permanentAddress: "Sherpur,Mymensingh",
        phone: [
          {
            number1: "09898776",
            number2: "09098766",
          },
        ],
      },
    ],
  },
];

export default function NestedMapping() {
  return (
    <Fragment>
      <h1>Personal Information</h1>
      {info.map((user, index) => (
        <article key={index}>
          <p>FullName: {user.fullName}</p>
          <p>Age: {user.age}</p>
          {user.address.map((address, index) => (
            <div key={index}>
              <p>Present-Address:{address.presentAddress}</p>
              <p>Permanent-Address:{address.permanentAddress}</p>
              {address.phone.map((data, index) => (
                <div key={index}>
                  <h1>Number-One:{data.number1}</h1>
                  <h1>Number-Two:{data.number2}</h1>
                </div>
              ))}
            </div>
          ))}
        </article>
      ))}
    </Fragment>
  );
}
