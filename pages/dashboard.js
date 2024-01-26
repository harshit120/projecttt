import Card from "@/Container/card";
import Navbar from "@/Container/navbar";
import styles from '../styles/Navbar.module.css'; 
import { data } from "autoprefixer";
import { useEffect,useState } from "react";

const Content=()=>{
    // const cardArray = Array.from({ length: 4 });

    

const [data, setData] = useState([]);
        const logMovies = async () => { 
            const response = await fetch("http://35.154.208.64:3000/get-mentee");
            const movies = await response.json();
            console.log(movies);
            setData(movies);

        return movies;
          }
        

  // const logMovies = async () => {
  //   try {
  //     const response = await fetch("http://35.154.208.64:3000/get-mentee");
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const movies = await response.json();
  //     console.log(movies);
  //     setData(movies);
  //   } catch (error) {
  //     console.error('Error fetching data:', error.message);
  //   }
  // };

  useEffect(() => {
    logMovies();
  }, []);
        
return(
    <div>
        <Navbar/>
        {/* <div className='flex flex-col' > */}

       
        {/* {cardArray.map(( index) => (
            
        <Card val=[...data]/>
       
      ))} </div> */}
      <div className={styles.app}>
  
      {data.map((item, index) => {
        return <Card key={index} name={item.name} skills={item.skills}   />;
      })}
    </div>


    </div>
)
}
export default Content;