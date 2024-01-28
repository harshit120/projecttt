import { useEffect, useState } from "react";
import style from "../styles/Mentee.module.css";
import { useRouter } from "next/router";
import Formm from "@/Container/form";

export default function AddMenteeForm() {
  const router = useRouter();

  const [inputFields, setInputFields] = useState({
    name: "",
    skills: [{ skill: "", experience: "" }],
    experience: [""],
    education: [
      {
        name: "",
        year: "",
      },
    ],
    family: {
      fatherName: "",
      motherName: "",
    },

    location: [{ city: "", country: "" }],

    discussion: [""],
    observation: [""],
    remarks: [""],
    suggestions: [""],
    aspiration: [""],
    thoughtsAboutMentee: [""],
    weakness: [""],
    strenght: [""],
    goal: [
      {
        goalName: "",
        year: "",
      },
    ],

    interview: [
      {
        interview: "",
        year: "",
        location: "",
      },
    ],
    salary: [
      {
        year: "",
        salary: "",
      },
    ],
  });

  useEffect(() => {
    console.log("I m rerendering");
    console.log(inputFields);
  }, [inputFields]);

  const handleform = async (e) => {
    const response = await fetch("http://35.154.208.64:3000/add-mentee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputFields }),
    });

    const data = await response.json();
    if (data.message == "Mentee added successfully") {
      router.push("/dashboard");
    } else {
      // Handle error if submission fails
    }
  };
  return (
    <div className={style.App}>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="46"
          width="42"
          onClick={() => {
            router.push("/dashboard");
          }}
          className="  md:ml-[40px] md:mt-[20px]"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      {/* <div method="POST"> */}
      <p className={style.name1}>Mentee Form</p>
      <div method="POST">
        <div className={style.container}>
          <p className={style.name}>Name:</p>
          <input
            type="text"
            className={style.input}
            name="name"
            placeholder="Name"
            onChange={(event) => {
              setInputFields((prevInputFields) => ({
                ...prevInputFields,
                name: event.target.value,
              }));
            }}
          />{" "}
          <br />
        </div>
        <Formm inputFields={inputFields} setInputFields={setInputFields} />
        <button type="submit" onClick={handleform} className={style.button}>
          Submit
        </button>
      </div>
    </div>
    // </div>
  );
}
