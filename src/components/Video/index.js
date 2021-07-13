import React from "react";
import "./video.scss";
import { NavLink } from "react-router-dom";
function Video() {
  // Nz5CnNHnpO8
  // ?rel=0&showinfo=0&vq=720;autoplay=1
  //let { id } = useParams();
  
  return (
      <>
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/cSQjaS_kUPk`}
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <NavLink to='/' className="video__return">
       <p className="return">Retour</p> 
    </NavLink>
    </>
  );
}

export default Video;




