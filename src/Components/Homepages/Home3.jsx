import React from "react";
import AddUser from "../Example/AddUser";
import SizeBoxContainer from "../Other/SizeBoxContainer";

const Home3 = () => {
  return (
    <>
      <SizeBoxContainer width="100%" height="500px" />
      <AddUser
        onAdd={(data) => {
          console.log("New user data:", data);
          // Handle the form data here
        }}
      />
    </>
  );
};

export default Home3;
