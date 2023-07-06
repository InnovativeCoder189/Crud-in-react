import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  let [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://64a40bbcc3b509573b56f7fc.mockapi.io/CrudbyIntern")
      .then((res) => {
          setData(res.data);
          console.log(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function handleDelete(id) {
    console.log("hello");
    axios
      .delete(`https://64a40bbcc3b509573b56f7fc.mockapi.io/CrudbyIntern/${id}`)
      .then(() => {
        getData();
      });
  }
  function setToLocalStorage(id,name,email){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    

  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
           <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/Update">
                    <button type="button" placeholder="EDIT" onClick={()=>setToLocalStorage(eachData.id,
                        eachData.name,
                        eachData.email)}>
                      Edit
                    </button>
                    </Link>
                  </td>

                  <td>
                    <button
                      type="button"
                      placeholder="DELETE"
                      onClick={() => {
                        handleDelete(eachData.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}
export default Read;
