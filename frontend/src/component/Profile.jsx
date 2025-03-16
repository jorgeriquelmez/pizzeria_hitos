// import { Link } from "react-router-dom";
const Profile = () => {
    return (
      <>
        <div className="cardprofile" style={{ width: "18rem", margin: "0 auto" }}>
          <img src="https://i1.sndcdn.com/artworks-hPZ6pGeWKwjlc1DD-fRF1UQ-t500x500.jpg" style={{borderRadius:'50%'}} className="card-img-top" alt="img_user" />
          <div className="card-body" style={{justifyItems:'center'}}>
            <h5 className="card-title">test@test.com</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary" >Cerrar sesión</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;