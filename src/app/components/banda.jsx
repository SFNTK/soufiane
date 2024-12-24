import React, { useEffect, useState } from "react";
import "./banda.css";
const Banda = () => {
  const [categor, setcat] = useState();
  const categories = [
    {
      image: "./react2.png",
      category: "React Native",
    },
    {
      image: "./python.png",
      category: "Python",
    },
    {
      image: "./js.png",
      category: "Javascript",
    },
    {
      image: "./react2.png",
      category: "Reactjs",
    },
    {
      image: "./nextjs.png",
      category: "Nextjs",
    },
    {
      image: "./node.png",
      category: "Nodejs",
    },
    {
      image: "./c++.png",
      category: "C++",
    },{
      image: "./csharp.svg",
      category: "C#"
    },

  ];
  useEffect(() => {
    //Runs only on the first render

    const cts = categories.map((category, index) => {
      return (
        <div key={index} className="categorydv">
          <div className="categpryimage">
            <img src={category.image} />
          </div>
          <span>{category.category}</span>
        </div>
      );
    });
    setcat(cts);
  }, []);
  return (
    <div
      id="catsection"
      className="bg-gradient-to-r from-gunmetal/10 to-blue-100 dark:from-turquoise/10 dark:to-gunmetal relative"
    >
      <div className="categories after:absolute after:right-0 after:bg-gradient-to-r after:from-blue-100/10 after:to-blue-100 dark:after:from-gunmetal/0 dark:after:to-gunmetal ">
        <div className="categories-slide">{categor}</div>

        <div className="categories-slide">{categor}</div>
      </div>
    </div>
  );
};

export default Banda;

{
  /* before:absolute before:left-0 before:bg-gradient-to-l before:from-blue-100/10 before:to-blue-100 dark:before:from-gunmetal/0 dark:before:to-gunmetal */
}
