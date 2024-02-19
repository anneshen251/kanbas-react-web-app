import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaQuestionCircle
, FaArrowAltCircleRight, FaArchive } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" color="Red" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" color="Red"/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" color="Red" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" color="Red"/> },
    { label: "Inbox",  icon: <FaEnvelope className="fs-2" color="Red"/> },
    { label: "History",  icon: <FaClock className="fs-2" color="Red"/> },
    { label: "Studio",  icon: <FaArchive className="fs-2" color="Red"/> },
    { label: "Commons",  icon: <FaArrowAltCircleRight className="fs-2" color="Red"/> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" color="Red"/> }
  ];
  const { pathname } = useLocation();
  return (
    <div className="flex-container">
    <ul className="wd-kanbas-navigation full-height-ul">
       <li id="img-nav"><a href="http://northeastern.edu"><img src="../../images/logo.jpeg" className="wd-zindex-bring-to-front"></img></a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;