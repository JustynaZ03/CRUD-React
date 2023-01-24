import { FormEvent, useState } from "react";
import { Navbar } from "./../navbar/navbar";
import "./add-new-user.scss";
import { useNavigate } from "react-router-dom";
export const AddNewUser = () => {
  const [userName, setUserNameState] = useState("");
  const [userEmail, setUserEmailState] = useState("");
  const [userPhone, setUserPhoneState] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { name: userName, email: userEmail, phone: userPhone };

    fetch(" http://localhost:8000/user", {
      method: "POST",
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
      <div className="add-new-user">
        <div className="add-new-user__container-center">
          <h2 className="add-new-user__container-center-title">
            Create New User
          </h2>
          <form
            className="add-new-user__container-center-form"
            onSubmit={handleSubmit}
          >
            <div className="add-new-user__container-center-items">
              <label className="add-new-user__container-center-label">
                Name:
              </label>
              <input
                required
                type="text"
                className="add-new-user__container-center-input"
                value={userName}
                onChange={(event) => setUserNameState(event.target.value)}
              ></input>
            </div>
            <div className="add-new-user__container-center-items">
              <label className="add-new-user__container-center-label">
                Email:
              </label>
              <input
                required
                type="email"
                className="add-new-user__container-center-input"
                value={userEmail}
                onChange={(event) => setUserEmailState(event.target.value)}
              ></input>
            </div>
            <div className="add-new-user__container-center-items">
              <label className="add-new-user__container-center-label">
                Phone:
              </label>
              <input
                required
                type="text"
                className="add-new-user__container-center-input"
                value={userPhone}
                onChange={(event) => setUserPhoneState(event.target.value)}
              ></input>
            </div>
            <div className="add-new-user__container-center-items-button">
              <button
                type="submit"
                className="add-new-user__container-center-button"
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
