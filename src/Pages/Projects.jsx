import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Projects = () => {
  const [show, setShow] = useState([false, false, false]); // State for each Offcanvas
  const [offcanvasTexts, setOffcanvasTexts] = useState([
    "", // Text for first carousel item
    "", // Text for second carousel item
    "", // Text for third carousel item
  ]);

  const handleClose = (index) => () => {
    setShow((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleShow = (index, text) => () => {
    setShow((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    setOffcanvasTexts((prevState) => {
      const newTexts = [...prevState];
      newTexts[index] = text;
      return newTexts;
    });
  };

  return (
    <div className="flex justify-center items-center text-white">
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage
            text="First slide"
            path="src/assets/vagabond 1.jpg"
          />
          <Carousel.Caption>
            <Button
              variant="primary"
              onClick={handleShow(0, "First Offcanvas Text")}
            >
              Launch
            </Button>
            <Offcanvas show={show[0]} onHide={handleClose(0)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{offcanvasTexts[0]}</Offcanvas.Body>
            </Offcanvas>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            text="Second slide"
            path="src/assets/GeminiProject.png"
          />
          <Carousel.Caption>
            <Button
              variant="primary"
              onClick={handleShow(
                1,
                `Using Gemini-API this model generated roadmaps for domain required by students and provides them links for necessary courses. The search is strictly restricted to courses`
              )}
            >
              Launch
            </Button>
            <Offcanvas show={show[1]} onHide={handleClose(1)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  CareerGPT- A RoadMap Generator for students
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{offcanvasTexts[1]}</Offcanvas.Body>
            </Offcanvas>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            text="Third slide"
            path="src/assets/stretched-1920-1080-679478.jpg"
          />
          <Carousel.Caption>
            <Button
              variant="primary"
              onClick={handleShow(2, "Third Offcanvas Text")}
            >
              Launch
            </Button>
            <Offcanvas show={show[2]} onHide={handleClose(2)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{offcanvasTexts[2]}</Offcanvas.Body>
            </Offcanvas>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
