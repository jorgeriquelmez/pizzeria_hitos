// import { Link } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { useContext, useEffect, useState  } from "react";


const Profile = () => {
  const { user, getProfile, handleSetTokenFalse } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
        await getProfile(); // Llama a getProfile
        setLoading(false); // Indica que la carga ha finalizado
    };
        fetchProfile();
    }, [getProfile]);
    
    if (loading) {
        return <p>Loading...</p>; 
    }
    
    if (!user) {
        return <p>Error loading profile.</p>; 
    }

    return (
      <>
        <div className="cardprofile" style={{ width: "18rem", margin: "0 auto" }}>
          <img src="https://i1.sndcdn.com/artworks-hPZ6pGeWKwjlc1DD-fRF1UQ-t500x500.jpg" style={{borderRadius:'50%'}} className="card-img-top" alt="img_user" />
          <div className="card-body" style={{justifyItems:'center'}}>
            <h5 className="card-title">{user.email}</h5>
            <p className="card-text"></p>
            <button className="btn btn-dark" onClick={handleSetTokenFalse} to='/login' >Cerrar sesión</button>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;