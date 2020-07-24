import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PicturePage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // console.log("HI! useffeect??");
    async function fetchPictureList() {
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log("RESPONSE??", response.data);
      setPictures(response.data);
    }

    fetchPictureList();
  }, []);
  console.log("PICS:", pictures); // who do we expect to see ..?
  // - whatever we got from the api
  // - Empty array first, then an array of objects (from the api) ?
  //
  return (
    <div>
      <h1>Pictures</h1>{" "}
      <div>
        {pictures.map((picture) => {
          // we will get on picture at a time
          console.log("PICTURE IN MAP:", picture);
          return (
            <div>
              <img height="150px" src={picture.download_url} />
              <p>{picture.author}</p>
              <Link to={`/pictures/${picture.id}`}>See In High Res</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
