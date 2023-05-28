import { authProtectedRoutes, publicRoutes } from "../routes/UserRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authmiddleware from "../routes/Authmiddleware";
import NonAuthLayout from "../routes/NonAuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              exact={true}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<Authmiddleware>{route.component}</Authmiddleware>}
              key={idx}
              exact={true}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
