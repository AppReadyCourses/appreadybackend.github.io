"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import FetchSingleCourse from "./[id]/page";



const FetchCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/course/`, { cache: 'no-store' });
      const data = await response.json();
      console.log("FETCH COURSES", data.courses);
      setCourses(data.courses);
    };
    fetchCourses();
  }, []);
  return (
    <div className=" flex flex-wrap gap-6 justify-center">
      {courses.map((course) => {
        //  return <h3 key={course.id}>{course.title}</h3>
        return (
          <div key={course._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Link href={course.url}>
                  <img src={course.imgUrl} alt="Course" />
                </Link>
              </figure>
              <div className="card-body">
                <Link href={course.url}>
                  <h2 className="card-title">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                </Link>
                <p >{course.intro}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{course.frontEnd}</div>
                  <div className="badge badge-outline">{course.backEnd}</div>
                  {/* <div className="badge badge-outline">{course.dataBase}</div> */}
                  <div className="badge badge-primary badge-outline">
                    <Link href={course.url}>
                      View Course
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchCourses;
