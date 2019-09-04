import React from "react";
import Image from "react-bootstrap/Image";
import "./image.css"

export default function(props) {
  return (
      <Image src = {require(`./../../assets/images/${props.image}.png`)} id ={props.id} onClick={props.onClick} rounded fluid />
  );
}
