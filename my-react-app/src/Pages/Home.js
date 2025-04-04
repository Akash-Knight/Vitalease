import React, { useEffect } from 'react'
import axios from 'axios'
import  Layout  from '../component/Layout';

function Home() {

  const getData = async () => {

    try {
      const response = await axios.post("/api/user/get-user-info-by-id", {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);

    } catch (error) {

      console.log(" error fetching user info ", error);

    }
  };

  useEffect(() => {

    getData();

  }, []);

  return (

    <Layout>

      <h1>homepage</h1>

    </Layout>
   
  )
}

export default Home;
