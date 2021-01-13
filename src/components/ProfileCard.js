import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Modal from "./Modal";
import Search from "./Search";

const ProfileCard = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [singleProfile, setSingleProfile] = useState([]);

  //
  const [filtered, setFiltered] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterFeedBack, setFilterFeedback] = useState(false);

  //   Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (profile) => {
    setOpen(true);
    setSingleProfile(profile);
  };

  const handleClose = () => {
    setOpen(false);
    setSingleProfile([]);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://api.enye.tech/v1/challenge/records"
        );
        console.log(response.data.records.profiles);

        setProfiles(response.data.records.profiles);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const modalProp = {
    open: open,
    handleClose,
  };

  return (
    <div>
      <div className="m-auto w-1/2 flex justify-center">
        <Search
          setFiltered={setFiltered}
          profiles={profiles}
          setFilterStatus={setFilterStatus}
          setFilterFeedback={setFilterFeedback}
        />
      </div>
      <div>
        {filterFeedBack ? (
          <h1 className="text-center text-md font-bold m-4">
            No results found
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="m-auto w-3/4 flex flex-col md:grid md:grid-cols-2 md:gap-4 md:w-1/2">
        {currentData.map((profile, index) => (
          <div key={index}>
            <div
              className="w-full rounded-20 shadow-lg p-4 cursor-pointer divide-y-4 divide-solid divide-gray-10"
              onClick={(e) => handleClickOpen(profile)}
            >
              <div className="flex justify-between py-2">
                <span className="text-sm font-bold">First Name: </span>
                <p className="break-words">{profile.FirstName}</p>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-bold">Last Name: </span>
                <p className="break-words">{profile.LastName}</p>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-bold">User Name: </span>
                <p className="break-words">{profile.UserName}</p>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-bold">Email: </span>
                <p className="break-words">{profile.Email}</p>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
      <Modal modalProp={modalProp} profile={singleProfile} />
      {filterStatus ? (
        <Pagination setCurrentData={setCurrentData} data={filtered} />
      ) : (
        <Pagination setCurrentData={setCurrentData} data={profiles} />
      )}
    </div>
  );
};

export default ProfileCard;
