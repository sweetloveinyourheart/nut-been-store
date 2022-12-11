import { FunctionComponent } from "react";
import { Carousel } from "react-bootstrap";

interface BannerProps {

}

const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banner-03.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/banner-04.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;