import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ669tyymrl_ZE6kXmhDDhW-I-J9P6jfTet2Q&s",
      name: "Dora",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqiFVSXjt_E0TxqfFC_H-kq7KNSUkiYjp4g&s",
      name: "Bujji",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CbaW1p9zOT3tloR44Vkh8T-_brA_84gVAw&s",
      name: "Pickachu",
    },
  ];

  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App">
      {data.map((profile, index) => (
        <Profile key={index} image={profile.image} name={profile.name} />
      ))}
    </div>
  );
}

export default App;

// create a new component

function Profile({ image, name }) {
  return (
    <div className="profile class-name">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

// const props = {
//   image : "",
//   name : "",
//   batch : ""
// }

// const {image, name, batch} = props

// function getname(name){
//   return name
// }

// getname("sanjay")
// return React.createElement(
//   'div',
//   {className : "profile-name", id:"profile-id"},
//   React.createElement("h2", null, "Profile name")
// )
