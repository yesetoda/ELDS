import React, { useState, useEffect } from "react";
import supabase from "./supabase";

const RegistrationForm = ({ who_is_the_user, signin_up }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(4);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [schoolId, setSchoolId] = useState("");
  const [schools, setSchools] = useState([]);
  const [regions, setRegions] = useState([]);
  const [regionId, setRegionId] = useState("");
  // const [isloading, setIsloading] = useState(false);
  let region_id_filter = 0;

// Fetch regions only once when the 'region_id_filter' changes
useEffect(() => {
  const fetchRegions = async () => {
    try {
      let { data: region_data, error } = await supabase
        .from("Region_Table")
        .select("*");

      if (error) {
        console.error("Error fetching Regions:", error);
      } else {
        setRegions(region_data);
      }
    } catch (error) {
      console.error("Error fetching Regions:", error);
    }
  };

  fetchRegions();
}, [region_id_filter]);

let region_id = regionId.split(" ")[1];
console.log(region_id);
region_id_filter = parseInt(region_id);
console.log("this is info about the region id");
console.log(region_id_filter, region_id, region_id_filter === region_id);

// Fetch schools on every render, but only if the user is not 'Admin' or 'School'
useEffect(() => {
  const fetchSchools = async () => {
    try {
      let region_id_filter = parseInt(region_id);
      console.log("this is info about the region id");
      console.log(
        region_id_filter,
        region_id,
        region_id_filter === region_id
      );
      const { data: school_data, error } = await supabase
        .from("School_Registration_Table")
        .select("*")
        .eq("region_id", region_id_filter);

      if (error) {
        console.error("Error fetching schools:", error);
      } else {
        console.log("this is the school data", school_data);
        setSchools(school_data);
      }
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  if (who_is_the_user !== "Admin" && who_is_the_user !== "School") {
    fetchSchools();
  }
}, [region_id, who_is_the_user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is the query");
    let query = who_is_the_user + "_Registration_Table";
    console.log(query);

    if (who_is_the_user === "School") {
      const { data, error } = await supabase
        .from(query)
        .insert([
          {
            [`${who_is_the_user.toLowerCase()}_name`]: firstName,
            [`${who_is_the_user.toLowerCase()}_phone_number`]: phoneNumber,
            [`${who_is_the_user.toLowerCase()}_email`]: email,
            region_id: region_id,
          },
        ])
        .select();
      if (error) {
        setError(true);
      }
    } else if (who_is_the_user === "Admin") {
      console.log("this is Admin reg");

      const { data, error } = await supabase
        .from(query)
        .insert([
          {
            [`${who_is_the_user.toLowerCase()}_fname`]: firstName,
            [`${who_is_the_user.toLowerCase()}_mname`]: middleName,
            [`${who_is_the_user.toLowerCase()}_lname`]: lastName,
            [`${who_is_the_user.toLowerCase()}_age`]: age,
            [`${who_is_the_user.toLowerCase()}_phone_number`]: phoneNumber,
            [`${who_is_the_user.toLowerCase()}_email`]: email,
          },
        ])
        .select();
      if (error) {
        setError(true);
      }
    } else {
      let school_id = schoolId.split(" ")[1];
    ;

      const { data, error } = await supabase
        .from(query)
        .insert([
          {
            [`${who_is_the_user.toLowerCase()}_fname`]: firstName,
            [`${who_is_the_user.toLowerCase()}_mname`]: middleName,
            [`${who_is_the_user.toLowerCase()}_lname`]: lastName,
            [`${who_is_the_user.toLowerCase()}_age`]: age,
            [`${who_is_the_user.toLowerCase()}_phone_number`]: phoneNumber,
            [`${who_is_the_user.toLowerCase()}_mail`]: email,
            school_id: school_id,
            region_id: region_id,
          },
        ])
        .select();
      if (error) {
        setError(true);
      }
    }

    if (!error) {
      // Reset form fields
      setFirstName("");setMiddleName("");setLastName("");setAge(4);setEmail("");setSchoolId("");setPhoneNumber("");}
    else {
      console.log(
        "there is an error inserting to the database table",
        `${who_is_the_user}_Registration_Table`
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>
          {who_is_the_user} {signin_up}
        </h1>
        <div>
          <label htmlFor={who_is_the_user + "Name"}>
            {who_is_the_user === "School" ? who_is_the_user : "First"} Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        {who_is_the_user !== "School" ? (
          <>
            <div>
              <label htmlFor="middleName">Middle Name:</label>
              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                min="4"
                defaultValue={age}
                max="120"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </>
        ) : null}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">phone Number:</label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <select
            id="region"
            value={regionId}
            onChange={(e) => setRegionId(e.target.value)}
            required
          >
            <option value="">Select a region</option>
            {regions
              ? regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.region_name} {region.region_id}
                  </option>
                ))
              : null}
          </select>
        </div>

        {(who_is_the_user !== "Admin") & (who_is_the_user !== "School") ? (
          <div>
            <label htmlFor="school">School:</label>
            <select
              id="school"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              required
            >
              <option value="">Select a School</option>
              {schools
                ? schools.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.school_name} {school.school_id}
                    </option>
                  ))
                : null}
            </select>
          </div>
        ) : null}

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationForm;
