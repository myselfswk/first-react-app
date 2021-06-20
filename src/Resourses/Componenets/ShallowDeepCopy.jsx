import React from 'react';
import _ from 'lodash';

function ShallowDeepCopy() {

    //Objects are reference type
    let obj1 = {
        name: 'Waleed Khan',
        skills: {
            primary: "HTML",
            secondary: "ReactJS"
        },
        calcFunc: function (age) {
            return age;
        },
        joiningDate: new Date()
    }

    //obj2 has the copy of the memory address of obj1
    let obj2 = obj1;

    //we can change the property of obj1 by obj2
    obj2.name = "Muhammad Waleed Khan";

    //there are several ways to avoid/prevent the copy of the object
    //now create an empty object from obj1
    let obj3 = Object.assign({}, obj1);
    obj3.name = "huzaifa Khan";

    //another way to avoid/prevent the copy of object is spread operator
    let obj4 = { ...obj1 };
    obj4.name = "Khan Abubakar";

    //but if we have a nested object, change in one object will impact to another object
    obj4.skills.primary = "HTML, CSS & JavaScript";

    //in order to prevent/avoid the copy of the nested object, we used JSON functionality
    let obj5 = JSON.parse(JSON.stringify(obj1));
    obj5.skills.primary = "Graphic Designing";

    //json.parse and json.stringify is working perfectly well untill and unless you have a catch(like some function on object)
    //there is no function on that object which you copy through json.parse and json.stringify
    //and the object of date you create in json.parse and json.stringify is also convert into string(no more object)
    //which means the original type of date is lost will we stringify it

    //in order to prevent it, we use library called lodash
    let obj6 = _.cloneDeep(obj1);
    obj6.skills.primary = "UX/UI Designer";

    console.log("Object One: ", obj1);
    console.log("Object Two: ", obj2);
    console.log("Object Three: ", obj3);
    console.log("Object Four: ", obj4);
    console.log("Object Five: ", obj5);
    console.log("Object Six: ", obj6);

    console.log("Object Four Joining Date Datatype: ", typeof (obj4.joiningDate));
    console.log("Object Five Joining Date Datatype: ", typeof (obj5.joiningDate));
    console.log("Object Six Joining Date Datatype: ", typeof (obj6.joiningDate));

    return (
        <div>
            <h1>Shallow Copy and Deep Copy</h1>
            <p>Shallow Copy is when you copy obj1 on obj2, as a result of that when you change obj2, it will impact on obj1</p>
        </div>
    )
}

export default ShallowDeepCopy;
