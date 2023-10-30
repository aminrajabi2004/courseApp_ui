import React from "react";

function CourseCard({ course }) {
  console.log(course);
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt="" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{course.title}</p>
            <p className="desc">{course.description}</p>
          </div>
          <span className="rate">{course.rate}</span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            {course.tags.map((t) => (
              <span className="badge badge--secondary">{course.tags}</span>
            ))}
          </div>
          <div className="caption">
            <div className="date">
              {new Date(course.start).toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <span
              className={`badge ${
                course.status == "Active"
                  ? "badge--primary"
                  : course.status == "Upcoming"
                  ? "badge--danger"
                  : "badge--secondary"
              }`}
            >
              {course.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
