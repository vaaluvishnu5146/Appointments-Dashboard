import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Landing from "./Pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { useAuthContext } from "./Context/AuthContext";
import NotFound from "./Pages/NotFound";
import { APPLICATION_ROUTES } from "./Config/Routes.config";

function App() {
  const { isLoggedIn, decodedToken = {} } = useAuthContext();
  const permissions = decodedToken?.roles;
  return (
    <div>
      <ToastContainer />
      <Routes>
        {!isLoggedIn && <Route Component={Login} path="/" />}
        {isLoggedIn && (
          <Route Component={Landing} path="/dashboard">
            {APPLICATION_ROUTES[1].children.map((route, index) => {
              if (
                route.children &&
                permissions?.indexOf(route.permission) > -1
              ) {
                return (
                  <Route
                    index={route.index}
                    key={`${route.path}-${index}`}
                    path={route.path}
                  >
                    {route.children.map((subRoute, subIndex) => (
                      <Route
                        key={`${subRoute.id}-${subIndex}`}
                        Component={subRoute.Component}
                        path={subRoute.path}
                      />
                    ))}
                  </Route>
                );
              }
            })}
          </Route>
        )}
        <Route Component={NotFound} path="*" />
      </Routes>
    </div>
  );
}

export default App;
