import React from 'react';
import DepartmentItem from './UI/DepartItem'
const Departments = () => {
    const departments = [
    {
        name:"Elders",
        image:'../assets/image1.jpg',
        members:["Elders Enock","Elder Sam",
        "Elder Hannah","Elder Ezra","Elder JM"],
        aboutus:"We love you we cherish you we value you"
    },
    {
        name:"Communication Department",
        image:'../assets/image2.jpg',
        members:["Gordon","Samuel",
        "Vivern","Chris","Kepha"],
        aboutus:"We love you we cherish you we value you"
    },
    {
        name:"Welfare Departmnet",
        image:'../assets/image3.jpg',
        members:["sam","linderfine",
        "Fabian","Kwicha","Hannah"],
        aboutus:"We love you we cherish you we value you"
    }
]
    return (
        <div className=''>
<DepartmentItem
 name={departments[0].name} 
 image={departments[0].image}
 members={departments[0].members}
 aboutus={departments[0].aboutus}
 />
<DepartmentItem
 name={departments[1].name} 
 image={departments[1].image}
 members={departments[1].members}
 aboutus={departments[1].aboutus}
 />
<DepartmentItem
 name={departments[2].name} 
 image={departments[2].image}
 members={departments[2].members}
 aboutus={departments[2].aboutus}
 />
        </div>
     );
}
 
export default Departments;