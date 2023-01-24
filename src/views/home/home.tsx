import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import "./home.scss";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const EditUser = (id?: number) => {
    navigate("/user/edit/" + id);
  };
  const RemoveUser = (id?: number) => {
    if (window.confirm("Do you want delete this user?")) {
      fetch("http://localhost:8000/user/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setUserData(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setUserData(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  return (
    <>
      <Navbar></Navbar>
      <div className="home">
        <div className="home__container">
          <div className="home__container-center">
            <h1 className="home__container-center-title">List of User</h1>
            <table className="home__container-center-title-table">
              <thead className="home__container-center-title-table-thread">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="home__container-center-title-tbody">
                {userData &&
                  userData?.map((item: User) => (
                    <tr key={item?.id}>
                      <td>{item?.id}</td>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.phone}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            EditUser(item.id);
                          }}
                          className="home__container-center-title-tbody-edit"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            RemoveUser(item.id);
                          }}
                          className="home__container-center-title-tbody-remove"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
