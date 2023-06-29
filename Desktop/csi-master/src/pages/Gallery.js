import "./Gallery.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageComponent from "../components/ImageComponent";

const Gallery = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="gallery">
        <div className="our-gallery">
          <div className=" btn btn-primary" style={{ borderRadius: "7%" }}>
            our gallery
          </div>
        </div>
        <h2 className="text-center mt-3">Explore Our Gallery</h2>

        <div className="row">
          <div className="image-component col col-md-5">
            <ImageComponent></ImageComponent>
          </div>
          <div className="image-component col col-md-5">
            <ImageComponent></ImageComponent>
          </div>
          <div className="image-component col col-md-5">
            <ImageComponent></ImageComponent>
          </div>
          <div className="image-component col col-md-5">
            <ImageComponent></ImageComponent>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Gallery;
