import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const currentRouteName = location.pathname.split('/').pop();
  return (
    <div>
      <div className="breadcrumb"><HiMiniBars3 color="Red" className="breadcrumb"/> Course {course?.name} <p>&gt;</p> <p>{currentRouteName}</p>
     </div>
     <button id="student-view">Student View</button>

      <hr></hr>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;