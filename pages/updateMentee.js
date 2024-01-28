import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import style from "../styles/Mentee.module.css";
import Formm from "@/Container/form";

const UpdateMentee = ({ initialData }) => {
  const router = useRouter();

  // const { data } = router.query;
  // const parseData = data ? JSON.parse(data) : null;

  // if (!parseData) {
  //   router.push("/dashboard");
  //   return null;
  // }
  // if (!parseData) {
  //   // If parseData is null or undefined, redirect to "/dashboard"
  //   if (typeof window !== 'undefined') {
  //     // Ensure this code only runs on the client side
  //     router.push("/dashboard");
  //   }
  //   return null; // Return null to avoid rendering anything on the server side
  // }

  const [inputFields, setInputFields] = useState(initialData);
  console.log(inputFields + "inputfields");
  useEffect(() => {
    console.log("I m rerendering");
    console.log(inputFields);
  }, [inputFields]);

  useEffect(() => {
    const handleBackButton = (event) => {
      console.log("back button");
      // Your custom logic here
      // For example, prevent default behavior to disable the back button
      event.preventDefault();
      // Or redirect the user to a specific page
      router.push("/dashboard");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const handleForm = async (e) => {
    // e.preventDefault();
    const { _id, ...req } = inputFields;
    try {
      const res = await fetch(
        `http://35.154.208.64:3000/update-mentee/${inputFields.name}`,
        {
          method: "PATCH", // Use 'PATCH' for updating data
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
          body: JSON.stringify(req), // Convert the inputFields object to a JSON string
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      if(data.message=="Mentee updated successfully"){
        router.push("/dashboard")
      }
      console.log(data); // Log the response data
    } catch (error) {
      console.error("Error:", error.message);
      // Handle errors
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
      <p className={style.name1}>Update Mentee Form</p>
      <div method="PATCH">
        <Formm inputFields={inputFields} setInputFields={setInputFields} />
        <button onClick={handleForm} className={style.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = context.query;

  const initialData = data ? JSON.parse(data) : null;

  if (!initialData) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialData,
    },
  };
}
export default UpdateMentee;
