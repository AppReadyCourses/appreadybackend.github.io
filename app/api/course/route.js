import connectMongoDB from "@/app/libs/mongodb";
import Course from "../../model/course";
import { NextResponse } from "next/server";

// id: Number,
//         title: String,
//         intro: String,
//         imgUrl: String,
//         frontEnd: String,
//         backEnd: String,
//         dataBase: String,
//         year: Number,
//         level: String,

export async function POST(request) {
  const {
    title,
    intro,
    imgUrl,
    frontEnd,
    backEnd,
    dataBase,
    year,
    level,
    youtube,
    duration,
    payPalBtn,
  } = await request.json();
  await connectMongoDB();

  console.log("yotube", youtube);
  await Course.create({
    title,
    intro,
    imgUrl,
    frontEnd,
    backEnd,
    dataBase,
    year,
    level,
    youtube,
    duration,
    payPalBtn,
  });
  return NextResponse.json({ message: "Course created" }, { status: 201 });
}

export async function GET() {
  // const courses = [
  //   {
  //     id: 1,
  //     title: "ReactJS & NodeJS Full-stack coffee project",
  //     intro:
  //       "This fullstack project includes ReactJS and NodeJS framework, you can learn the basics of how to write effecient code in project",
  //     imgUrl:
  //       "https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412",
  //     frontEnd: "ReactJS",
  //     backEnd: "NodeJS",
  //     dataBase: "MongoDB",
  //     year: 2024,
  //     level: "Beginner",
  //     youtube: "https://www.youtube.com/embed/MnOi08OdaGY?si=H3jYz0pkei1QwbXS",
  //     duration: "5.5 hours",
  //   },
  //   {
  //     id: 2,
  //     title: "Angular & NestJS Full-stack e-commerce",
  //     intro:
  //       "This fullstack project includes Angular & NestJS framework, Angular has a very well made structure of writing codes, same as NestJS, both framework use TypeScript for codes",
  //     imgUrl:
  //       "https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861",
  //     frontEnd: "Angular",
  //     backEnd: "NestJS",
  //     dataBase: "PostgresSQL",
  //     year: 2024,
  //     level: "Beginner",
  //     youtube: "https://www.youtube.com/embed/Mv5TPGGrqQg?si=BgZQbWwDY60cG094",
  //     duration: "22",
  //   },
  // ];
  await connectMongoDB();
  const courses = [
    {
      id: 1,
      title: "ReactJS & NodeJS Full-stack coffee project",
      intro:
        "This Fullstack project includes ReactJS and NodeJS. You can learn the basics of how to write effecient codes in this course. It includes full CRUD, CSS design, State Management tools with Redux Dev tool.",
      imgUrl:
        "https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412",
      frontEnd: "ReactJS",
      backEnd: "NodeJS",
      dataBase: "MongoDB",
      year: 2024,
      level: "Beginner",
      youtube: "https://www.youtube.com/embed/MnOi08OdaGY?si=H3jYz0pkei1QwbXS",
      duration: "5.5 hours",
      url: "https://www.udemy.com/course/react-nodejs-fullstack-coffee-web-devlopment-course-2024/?couponCode=24T4MT92724A",
    },
    {
      id: 2,
      title: "Angular & NestJS Full-stack e-commerce",
      intro:
        "This fullstack coures includes Angular & NestJS framework. Angular has a very well-made structure for writing code. Both frameworks use TypeScript for codes. The course also introduced payment systems such as Paypal integration, User authentication and authorization.",
      imgUrl:
        "https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861",
      frontEnd: "Angular",
      backEnd: "NestJS",
      dataBase: "PostgresSQL",
      year: 2024,
      level: "Beginner",
      youtube: "https://www.youtube.com/embed/Mv5TPGGrqQg?si=BgZQbWwDY60cG094",
      duration: "22",
      url: "https://www.udemy.com/course/the-e-commerce-full-stack-web-development-bootcamp/?couponCode=24T4MT92724A",
    },
  ];
  return NextResponse.json({ courses });
}
