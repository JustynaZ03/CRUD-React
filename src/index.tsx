import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { Home } from "./views/home/home";
import { AddNewUser } from "./components/add-new-user/add-new-user";
import { EditUser } from "./components/edit-user/edit-user";
export const AppRouter = () => {
  useEffect(() => {
    document.title = "User CRUD";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/user/create" element={<AddNewUser />} />
        <Route path="/user/edit/:userID" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRouter />);

reportWebVitals();
