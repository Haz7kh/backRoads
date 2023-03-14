import { useState } from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  const [isClicked, setIsClicked] = useState(true);

  const readMoreClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            {isClicked
              ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor"
              : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor  adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolo adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolo"}
          </p>
          <button onClick={readMoreClicked} className="btn">
            {isClicked ? "Read More" : "Read Less"}
          </button>
        </article>
      </div>
    </section>
  );
};
export default About;
