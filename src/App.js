import "./App.css";
import { useEffect } from "react";
import { SidebarBody } from "./component/sidebar/Layout";
import authToken from "./utility/authToken";
import store from "./redux/store";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      authToken(localStorage.token);
    }

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: "LOGOUT" });
    });
  }, []);

  return (
    <div className="App">
      {/* <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="dashboard/*"
          element={ */}
            {/* // <PrivateRoute> */}
              <SidebarBody />
            {/* // </PrivateRoute> */}
          {/* }
        />
      </Routes> */}
    </div>
  );
}

export default App;
