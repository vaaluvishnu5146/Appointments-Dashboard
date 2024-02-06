import Appointments from "../Pages/Appointments";
import ManageAppointments from "../Pages/Appointments/ManageAppointments";
import Doctors from "../Pages/Doctors";
import ManageDoctors from "../Pages/Doctors/ManageHospitals";
import Hospitals from "../Pages/Hospitals";
import ManageHospitals from "../Pages/Hospitals/ManageHospitals";
import Insights from "../Pages/Insights";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";

export const APPLICATION_ROUTES = [
  {
    isPublic: true,
    Component: Login,
    path: "/",
  },
  {
    isPublic: false,
    Component: Landing,
    path: "/dashboard",
    children: [
      {
        isPublic: false,
        Component: Insights,
        index: true,
      },
      {
        title: "Hospital",
        id: "hospital",
        isPublic: false,
        permission: "hospital",
        children: [
          {
            title: "Create Hospital",
            id: "createHospital",
            Component: Hospitals,
            path: "/dashboard/hospital/create",
            permission: "createHospital",
          },
          {
            title: "Manage Hospital",
            id: "manageHospital",
            isPublic: false,
            Component: ManageHospitals,
            path: "/dashboard/hospital/manage",
            permission: "manageHospitals",
          },
        ],
      },
      {
        title: "Doctors",
        id: "doctors",
        isPublic: false,
        permission: "doctors",
        children: [
          {
            title: "Create Doctors",
            id: "createDoctors",
            isPublic: false,
            Component: Doctors,
            path: "/dashboard/doctor/create",
            permission: "createDoctors",
          },
          {
            title: "Manage Doctors",
            id: "manageDoctors",
            isPublic: false,
            Component: ManageDoctors,
            path: "/dashboard/doctor/manage",
            permission: "manageDoctors",
          },
        ],
      },
      {
        title: "Appointments",
        id: "appointments",
        isPublic: false,
        permission: "appointments",
        children: [
          {
            title: "Create Appointments",
            id: "createAppointments",
            isPublic: false,
            Component: Appointments,
            path: "/dashboard/appointment/create",
            permission: "createAppointments",
          },
          {
            title: "Manage Appointments",
            id: "manageAppointments",
            isPublic: false,
            Component: ManageAppointments,
            path: "/dashboard/appointment/manage",
            permission: "manageAppointments",
          },
        ],
      },
    ],
  },
];
