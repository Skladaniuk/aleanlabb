import Slider from "react-slick";   
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scss from './slider.module.scss'
import { nanoid } from 'nanoid';




export const JobsSlider = ({jobs}) => {

    
    
  
  const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
       
          {
            breakpoint: 1039,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return(
       
     <div >
     <Slider {...settings}>
      
        {jobs.pictures.map(picture => (<ul key={nanoid()}><li   >
                 <div  className={scss.wrapper}> <img 
                  src={picture} alt="img"/> </div>
                </li></ul>))}
               
     </Slider>
     </div>
   
    )
}