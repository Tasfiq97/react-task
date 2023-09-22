import React, { useEffect, useState } from "react";
import FullModalA from "./FullModalA";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Problem2 = () => {
  const [isModalA, setIsModalA] = useState(false);

  const [isModalB, setIsModalB] = useState(false);
  const [isFullModalA, setIsFullModalA] = useState(false);
  const [isFullModalB, setIsFullModalB] = useState(false);
  const [countries, setCountries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isUs, setIsUs] = useState(false);
  const [isContact, setIsContact] = useState(false);
  console.log("🚀 ~ file: Problem-2.jsx:17 ~ Problem2 ~ isContact:", isContact);
  const navigate = useNavigate();
  useEffect(() => {
    const data = axios
      .get("https://contact.mediusware.com/api/contacts/")
      .then((data) => setCountries(data.data.results));
  }, []);
  const handleRoute = () => {
    navigate("allCountries");
  };
  const handleRoute2 = () => {
    // https://contact.mediusware.com/api/country-contacts/United%20States/
    const data = axios
      .get("https://contact.mediusware.com/api/contacts/")
      .then((data) => setContacts(data.data.results));

    navigate("us-contacts");
    setIsUs(true);
  };
  const handleDataToggle = () => {
    setIsContact(true);
  };

  //   const [isModalA, setIsModalA] = useState(false);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleRoute}
          >
            All Contacts
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            type="button"
            className="btn btn-lg btn-outline-warning"
            onClick={handleRoute2}
          >
            US Contacts
          </button>
        </div>
      </div>

      {
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div style={{ height: "100vh", overflow: "hidden" }} class="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <button
                    style={{ backgroundColor: "#46139f", color: "white", padding: "10px", border: "none" }}
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal2"
                    // type="button"
                    onClick={handleDataToggle}
                  >
                    All Contacts
                  </button>
                  <button
                    style={{ backgroundColor: "#ff7f50", color: "white", padding: "10px", border: "none" }}
                    // className="btn btn-lg btn-outline-warning"
                    onClick={handleRoute2}
                  >
                    US Contacts
                  </button>
                  <Table countries={countries} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <button
                  style={{ backgroundColor: "#46139f", color: "white", padding: "10px", border: "none" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                  type="button"
                  // onClick={handleData}
                  //   ff7f50
                >
                  All Contacts
                </button>
                <button
                  style={{ backgroundColor: "#ff7f50", color: "white", padding: "10px", border: "none" }}
                  className="btn btn-lg btn-outline-warning"
                  onClick={handleRoute2}
                >
                  US Contacts
                </button>
                <Table countries={countries} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
