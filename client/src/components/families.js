import React from 'react';
import Familyitem from './UI/Familyitem'
const Families = () => {
    const families = [
    {
        name:"Diaspora A",
        leader:"Lukas",
        image:'../assets/image1.jpg',
        members:['sam','delphine'],
        aboutus:"We love you we cherish you we value you"
    },
    {
        name:"Diaspora B",
        leader:'George',
        image:'../assets/image2.jpg',
        members:['George','kwicha'],
        aboutus:"We love you we cherish you we value you"
    },
]
    return (
        <div className=''>
<Familyitem
 name={families[0].name} 
 image={families[0].image}
 members={families[0].members}
 aboutus={families[0].aboutus}
 />
<Familyitem
 name={families[1].name} 
 image={families[1].image}
 members={families[1].members}
 aboutus={families[1].aboutus}
 />
        </div>
     );
}
 
export default Families;