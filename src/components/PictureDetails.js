import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PictureDetails() {
  const [pictureDetails, setPictureDetails] = useState({});
  const params = useParams();
  //   console.log("PARAMS:", params);
  const pictureId = params.pictureId;
  useEffect(() => {
    console.log("IT IS SUPER EFFECTIVE", pictureId);
    async function fetchImageDetails() {
      const response = await axios.get(
        `https://picsum.photos/id/${pictureId}/info`
      );
      console.log("RESPONSE:", response.data);
      setPictureDetails(response.data);
    }

    fetchImageDetails();
  }, [pictureId]);
  console.log("DETAILS IN COMPONENT:", pictureDetails);

  return (
    <div>
      <h1>{pictureDetails.author}</h1>
      <img src={pictureDetails.download_url} />
    </div>
  );
}
