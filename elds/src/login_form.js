import React, { useState } from "react";
import supabase from "./supabase";

const LoginForm = ({ who_is_the_user }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(4);
  const [email, setEmail] = useState("");
  let [schoolId, setSchoolId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //   const [schools, setSchools] = useState([]);

  //   useEffect(() => {
  //     const fetchSchools = async () => {
  //       try {
  //         const { data, error } = await supabase.from("School_table").select("*");

  //         if (error) {
  //           console.error("Error fetching schools:", error);
  //         } else {
  //           setSchools(data);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching schools:", error);
  //       }
  //     };

  //     fetchSchools();
  //   }, []);
  //   console.log("this is the schools list");
  //   console.log(schools);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(age);
    console.log(phoneNumber);
    let school_id = schoolId.split(" ")[1];
    console.log(school_id);
    console.log(email);

    const { data, error } = await supabase
      .from("Student_Registration_Table")
      .insert([
        {
          student_fname: firstName,
          student_mname: middleName,
          student_lname: lastName,
          student_age: age,
          student_phone_number: phoneNumber,
          student_mail: email,
          school_id: school_id,
        },
      ])
      .select();

    if (!error) {
      // Reset form fields
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setAge(4);
      setEmail("");
      setSchoolId("");
      setPhoneNumber("");
    } else {
      console.log(
        "there is an error inserting to the database table",
        "Student_Registration_Table"
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>{who_is_the_user} Login</h1>
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
        {(who_is_the_user !== "Admin") & (who_is_the_user !== "School") ? (
          <div>
            <label htmlFor="schoolId">School id:</label>
            <input
              type="text"
              id="schoolId"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              required
            />
          </div>
        ) : null}

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
