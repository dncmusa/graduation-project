import { gradContext } from '@/context'
import { useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const { peopleData, handleScroll } = useContext(gradContext)
  const settings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Slider {...settings} style={{ marginTop: '10rem' }}>
      {peopleData.map((people) => {
        return (
          <div key={people.id}>
            <h3>
              <img
                width={300}
                height={300}
                src={people.img}
                alt={people.fullName}
                onClick={() => handleScroll(people.id)}
              />
            </h3>
          </div>
        )
      })}
    </Slider>
  )
}
export default Carousel
