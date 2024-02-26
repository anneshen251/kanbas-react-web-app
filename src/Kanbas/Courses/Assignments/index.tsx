import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
        <div className="top">
        <input type="text" id="search" placeholder="Search for Assignments"/>
        <button id="btns" className="btn btn-outline-secondary d-none d-lg-block"><FaEllipsisV></FaEllipsisV></button>
        <button className="red-btn git" type="button"><FaPlus></FaPlus>Assignment</button> 
        <button className="btnss d-none d-lg-block" type="button"><FaPlus></FaPlus>Group</button>
        </div>
        <hr></hr>
        <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link className="blackLink"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;