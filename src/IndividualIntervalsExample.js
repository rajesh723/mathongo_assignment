import Carousel from 'react-bootstrap/Carousel';
import first from '../src/slidesitems/first.svg'
import second from '../src/slidesitems/second.svg'
import third from '../src/slidesitems/third.svg'
function IndividualIntervalsExample() {
  
  return (
    <Carousel controls="" indicators="">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;