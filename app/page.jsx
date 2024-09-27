import Link from "next/link";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import CoursesPage from "./courses/page";
import FetchCourses from "./fetchCourses/page";

export default async function Home() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to App Ready Courses!
            </h1>
            <p className="py-6">
              Let's build beautiful websites together! You can learn
              HTML5, CSS3, Web Frameworks like React, Angular, Backend
              Development like Node.js, NestJS, Web Design tools like Figma,
              Database Integration, Responsive Web Design and so much more!{" "}
            </p>
            <h3 className="text-3xl font-bold">Who am I?</h3>
            <img
              src="https://ik.imagekit.io/9kllv04exw/IMG_3613.jpg?updatedAt=1727430747788"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <br />
            <p>
              My name is Mo Mo. I'm a 4 years experienced Web Developer. I love
              web design and web development. I'm a self-taught web developer
              and through the years I have wanted to share my knowledge with
              people all over the world.{" "}
            </p>
            <br />
            <p>
              I enjoyed this web development journey, I learn more, I build
              more, and I want to share more.
            </p>
            <br />
            <h3 className="text-3xl font-bold">
              My current courses available on Udemy.com:
            </h3>
          </div>
        </div>
      </div>
      <FetchCourses />
      <Footer />
    </div>
  );
}
