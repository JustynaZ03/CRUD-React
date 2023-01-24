import { FormEvent, useState } from "react";
import { Navbar } from "./../navbar/navbar";
import "./edit-user.scss";
import { useNavigate, useParams } from "react-router-dom";
export const EditUser = () => {
  const { userID } = useParams();
  const [userName, setUserNameState] = useState("");
  const [userEmail, setUserEmailState] = useState("");
  const [userPhone, setUserPhoneState] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { name: userName, email: userEmail, phone: userPhone };
    fetch("http://localhost:8000/user" + userID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="edit-user">
        <div className="edit-user__container-center">
          <h2 className="edit-user__container-center-title">Create New User</h2>
          <form
            className="edit-user__container-center-form"
            onSubmit={handleSubmit}
          >
            <div className="edit-user__container-center-items">
              <label className="edit-user__container-center-label">Name:</label>
              <input
                required
                type="text"
                className="edit-user__container-center-input"
                value={userName}
                onChange={(event) => setUserNameState(event.target.value)}
              ></input>
            </div>
            <div className="edit-user__container-center-items">
              <label className="edit-user__container-center-label">
                Email:
              </label>
              <input
                required
                type="email"
                className="edit-user__container-center-input"
                value={userEmail}
                onChange={(event) => setUserEmailState(event.target.value)}
              ></input>
            </div>
            <div className="edit-user__container-center-items">
              <label className="edit-user__container-center-label">
                Phone:
              </label>
              <input
                required
                type="text"
                className="edit-user__container-center-input"
                value={userPhone}
                onChange={(event) => setUserPhoneState(event.target.value)}
              ></input>
            </div>
            <div className="edit-user__container-center-items-button">
              <button
                type="submit"
                className="edit-user__container-center-button"
              >
                Create new user
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
