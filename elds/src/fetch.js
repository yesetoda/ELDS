import supabase from "./supabase.js"
import React from "react";
import { useState, useEffect } from "react";
const Fetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let { data: Student_Table, error } = await supabase
          .from('Student_Table')
          .select('*')

        if (error) {
          setError("There was an error connecting to the database");
        } else {
          setData(Student_Table);
        }
      } catch (err) {
        setError("An unexpected error occurred while fetching data");
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div>
      <h1>Student Data</h1>
      <ul>
        {data.map((student, index) => (
          <li key={index}>{student.student_fname}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;