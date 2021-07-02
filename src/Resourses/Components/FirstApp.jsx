import React from 'react';
import './FirstApp.css';

function FirstApp() {
    // const [name, setName] = useState("Waleed Khan");
    // var com = (
    //   <div>
    //     <h1>Hello World</h1>
    //     <p>{name}</p>
    //   </div>
    // );

    // const changeName = () => {
    //   setName({ name: "Huzaifa Khan" });
    // };
    var firstName = "Waleed";
    var lastName = "Khan";
    var fullName = firstName.concat(" ", lastName);
    var rollNo = 42453;
    var wantToEdit = true;
    var url = "https://picsum.photos/200";

    const date = new Date();
    const year = date.getFullYear();
    const styleH = {
        color: "red",
        backgroundColor: "blue"
    };
    return (
        <div className="App">
            {/* {com}
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={() => changeName}>Change Name</button> */}
            <h1 className="lang">My Favorites Languages: -</h1>
            <ol contentEditable={wantToEdit} style={styleH}>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
            </ol>
            <h2>My First Name is {firstName}</h2>
            <h2>My Last Name is {lastName}</h2>
            <h2>My Full Name is {fullName}</h2>
            <h2>My Roll No is: {rollNo}</h2>
            <h2>By, Muhammad Waleed Khan</h2>
            <h2>Copyrights: {year}</h2>
            <img src={url} alt="Random Pic" />
        </div>
    )
}

export default FirstApp;
