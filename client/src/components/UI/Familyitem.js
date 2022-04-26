/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
const Familyitems = (props) => {
  const [name, setname] = useState(props.name);
  const [leader,setleader] = useState(props.leader);
  const [image, setimage] = useState(props.image);
  const [members, setmembers] = useState(props.members);
  const [aboutus, setaboutus] = useState(props.aboutus);
  return (
    <div className="familyitem">
      <div className="description">
        <img src={image} alt="family image" />
        <h2 className="name">{name}</h2>
          <h3 className="head">{leader}</h3>
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

export default Familyitems;
