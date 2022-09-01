import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import image1 from "./pictures/munna-bhaiya.png";
import image2 from "./pictures/rati-shankar.png";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={image1} />
          <div className="my-carousel">
            <h3>Manish Tripathi</h3>
            <h4>B.Tech student at SRM University</h4>
            <p>
              <em>Through <strong>CollegeCatalogue</strong> I easily got all the information I needed about my dream college - SRM University.</em>
            </p>
          </div>
        </div>

        <div>
          <img src={image2} />
          <div className="my-carousel">
            <h3>Rati Shankar</h3>
            <h4>Asst. Professor - Engineering Physics at BITS Pilani</h4>
            <p><em><strong>CollegeCatalogue</strong> is one of the finest platforms out there if you want browse through a wide range of colleges for admission as a student or for job purposes as a professor.</em></p>
          </div>
        </div>
      </Carousel>
    );
  }
}
