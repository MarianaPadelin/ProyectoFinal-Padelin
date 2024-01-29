import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {/* hacer 2 distintos  */}
      <div className="redes">
        <div className="contactoFooter">
          <div className="mediosDeContacto">
            <div className="tituloFooter">
              <Navbar.Brand href="#home">
                <Image
                  alt="logo"
                  src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1685833673/productos/Logo_ve995f.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ marginLeft: 20 }}
                  roundedCircle
                />
                MGGM
              </Navbar.Brand>
              <Link
                to="https://www.instagram.com/mggmceramica/"
                target="_blank"
              >
                <InstagramIcon fontSize="large" style={{ color: "black" }} />
              </Link>
            </div>

            <h6>
              <i>Cerámica artesanal</i>
            </h6>

            <h6>
              <i>Patagonia Argentina</i>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;



// import { Link } from "react-router-dom";
// import "./footer.css"

// const Footer = () => {
//   return (
//     <div className="divFooter"

//     >
//       <Navbar className="navFooter"
//       >
//         <Navbar.Brand href="#home">
//           <Image
//             alt="logo"
//             src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1685833673/productos/Logo_ve995f.jpg"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             style={{ marginLeft: 20 }}
//             roundedCircle
//           />
//           MGGM
//         </Navbar.Brand>
//         <h5>
//           <i id="epigrafe">Cerámica artesanal - Patagonia Argentina</i>
//         </h5>

//         <Link to="https://www.instagram.com/mggmceramica/" target="_blank">
//           <InstagramIcon fontSize="large" style={{ color: "black" }} />
//         </Link>
//       </Navbar>
//     </div>
//   );
// };

// export default Footer;
