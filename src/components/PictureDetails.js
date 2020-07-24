import React from "react";
import { useParams } from "react-router-dom";

export default function PictureDetails() {
  const params = useParams();
  console.log("PARAMS:", params); // what will this be ...?
  // id?
  // function
  // pictureId in the url
  // Was: Object with { pictureId: "1003" }

  return <div>DETAILS ...</div>;
}
