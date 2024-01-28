import Card from "@/Container/card";
import Navbar from "@/Container/navbar";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Content = () => {
  // const cardArray = Array.from({ length: 4 });
  const router = useRouter();
  const [data, setData] = useState([]);
  const logMovies = async () => {
    const response = await fetch("http://35.154.208.64:3000/get-mentee");
    const movies = await response.json();
    console.log(movies);
    setData(movies);

    return movies;
  };

  useEffect(() => {
    logMovies();
  }, []);

  const moveupdateScreen = (data1) => {
    console.log(data);
    router.push({
      pathname: "/updateMentee",
      query: { data: JSON.stringify(data1) },
    });
  };

  return (
    <div>
      <Navbar />

      <div className={styles.app}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              menteeData={(data) => {
                console.log(data);
                moveupdateScreen(data);
              }}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Content;
