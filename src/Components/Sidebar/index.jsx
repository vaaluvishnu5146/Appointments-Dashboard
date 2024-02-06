import React, { useRef } from "react";
import Icons from "../../Assets/icons";
import NavItemExpandable from "../NavItem/NavItemExpandable";
import { APPLICATION_ROUTES } from "../../Config/Routes.config";
import { useAuthContext } from "../../Context/AuthContext";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const { decodedToken = {} } = useAuthContext();
  const permissions = decodedToken?.roles;

  function handleSidebarToggle() {
    if (sidebarRef.current.classList.contains("toggled")) {
      sidebarRef.current.classList.remove("toggled");
    } else {
      sidebarRef.current.classList.add("toggled");
    }
  }

  function renderNavItems(route, index) {
    return (
      <React.Fragment>
        <hr className="sidebar-divider d-none d-md-block" />
        <NavItemExpandable
          key={`${route.title}-${index}`}
          id={route.id}
          label={route.title}
          routes={route?.children}
        />
      </React.Fragment>
    );
  }

  return (
    <ul
      ref={sidebarRef}
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">UMP PORTAL</div>
      </div>

      <div>
        {APPLICATION_ROUTES[1].children.map((route, index) => {
          if (permissions?.indexOf(route.permission) > -1 && route.children) {
            return renderNavItems(route, index);
          }
        })}
      </div>

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleSidebarToggle}
        >
          <Icons.arrowRight color="#FFFFFF" />
        </button>
      </div>
    </ul>
  );
}
// <hr className="sidebar-divider d-none d-md-block" />

//         <NavItemExpandable
//           id="hospital"
//           label="Hospitals"
//           routes={HOSPITAL_ROUTES}
//         />

//         <hr className="sidebar-divider d-none d-md-block" />
//         <NavItemExpandable
//           id="doctor"
//           label="Doctors"
//           routes={DOCTORS_ROUTES}
//         />

//         <hr className="sidebar-divider d-none d-md-block" />
//         <NavItemExpandable
//           id="appointments"
//           label="Appointments"
//           routes={APPOINTMENT_ROUTES}
//         />
