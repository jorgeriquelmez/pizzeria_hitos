import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="error404">
            <img src="https://img.freepik.com/vector-gratis/concepto-landing-page-fallo-tecnico_52683-21190.jpg?t=st=1740752586~exp=1740756186~hmac=40c2a5bc31fe75a65fc9b3fdbeff11bac0cbd3b597845e665778c4baf5a3a962&w=1060" style={{ maxWidth: "40%",margin: "0 auto"  }} alt="error" />
        <Link to="/" className="btn btn-primary">Ir al Home</Link>
    </div>
  )
}

export default NotFound
