import ModuleList from "../Modules/List";
import "./index.css"
import { FaCheckCircle, FaEllipsisV, FaPlus, FaCalendar, FaBullseye, FaChartBar, FaBullhorn, FaBell, FaArrowRight, FaHandPointRight, FaBan} from "react-icons/fa";
function Home() {
  return (
      <div className="container">
        <div className="row">
        <div className="col-sm">
        <ul className="list-group wd-modules">
          <div className="wd-flex-col-container">
            <div id="div-padding">
            <button id="btns" className="btn btn-outline-secondary d-none d-md-block"><FaEllipsisV></FaEllipsisV></button>
            <button id="red-btn" className="btn btn-outline-secondary d-none d-md-block"><FaPlus></FaPlus>Module</button>
            <button id="btnss" className="btn btn-outline-secondary dropdown-toggle d-none d-md-block"> <FaCheckCircle></FaCheckCircle>
                Publish All</button>
            <button id="btnss" className="btn btn-outline-secondary d-none d-md-block">View Progress</button>
            <button id="btnss" className="btn btn-outline-secondary d-none d-md-block">Collapse all</button>
        </div>
            <hr></hr>
        </div>
        </ul>
        <ModuleList/>
        </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" id="course-status">
        <div className="wd-flex-row-container">
        <h4 id="course-status-title">Course Status</h4>
        <hr></hr>
          <div>
          <button id="published" className="btn btn-outline-secondary"><FaCheckCircle></FaCheckCircle>Published</button>
          <button className="btn btn-outline-secondary"><FaBan></FaBan>Unpublish</button>
        </div>
          <div>
              <button className="catalog-btn btn btn-outline-secondary"><FaHandPointRight></FaHandPointRight>Import Existing Content</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaArrowRight></FaArrowRight>Import From Commons</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaBullseye></FaBullseye>Choose Home Page</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaChartBar></FaChartBar>View Course Stream</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaBullhorn></FaBullhorn>New Announcement</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaChartBar></FaChartBar>New Analytics</button>
              <button className="catalog-btn btn btn-outline-secondary"><FaBell></FaBell>View Course Notifications</button>
              </div>
              <h4 id="course-status-title">To Do</h4>
              <hr></hr>
                <a> <i className="fa-solid fa-circle-info"></i>Grade A1 - ENV + HTML</a>
          <h4 id="course-status-title">Coming Up</h4>
          <hr></hr>
          <a id = "calendar" href=""><FaCalendar></FaCalendar>View Calendar</a>
          <ul>
              <li><a id = "calendar" href=""><FaCalendar></FaCalendar>Lecture CS4550,12345 Sep 7 at 11:59AM</a></li>
              <li><a id = "calendar" href=""><FaCalendar></FaCalendar>Lecture CS4550,12341 Sep 11 at 2:39PM</a></li>
              <li><a id = "calendar" href=""><FaCalendar></FaCalendar>Lecture CS4550,00000 Sep 23 at 4:00PM</a></li>
          </ul>
      </div>
      </div>
      </div>
      </div>
  );
}
export default Home;