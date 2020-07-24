import React, { useEffect } from "react";
import axios from "axios";

export default function PicturePage() {
  useEffect(() => {
    // console.log("HI! useffeect??");
    async function fetchPictureList() {
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log("RESPONSE??", response);
    }

    fetchPictureList();
  }, []);
  return <div>PICTURES HERE, TODO</div>;
}
