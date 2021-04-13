import React from "react";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.About}>
      <h1>About The App</h1>
      <p>
        Application made focusing on API calls, using Redux-Toolkit, adding type
        Definitions with TypeScript, and many more.
      </p>

      <h1 style={{ paddingTop: "none" }}>More Informaton</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sinthooranravinathan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SinthooranR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://sinthooranr.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
