/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
const DepartmentItem = (props) => {
  const [name, setname] = useState(props.name);
  const [image, setimage] = useState(props.image);
  const [members, setmembers] = useState(props.members);
  const [aboutus, setaboutus] = useState(props.aboutus);
  return (
    <div className="departmentitem">
      <div className="description">
        <img src={image} alt="department image" />
        <h2 className="name">{name}</h2>
      </div>
      <div className="members">
{members.forEach((member)=>(<p>{member}</p>))}
      </div>
      <div className="aboutus">
        <p>{aboutus}</p>
      </div>
    </div>
  );
};

export default DepartmentItem;
