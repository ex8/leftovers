import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  prevArrow: {
    left: 100,
  },
  nextArrow: {
    right: 100,
  },
}));

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "tomato", left: '3%', zIndex: 1 }}
    onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "tomato", left: '93%', zIndex: 1 }}
    onClick={onClick}
  />
);

const Carousel = ({ images, ...rest }) => {
  const { media, prevArrow, nextArrow } = useStyles();
  return (
    <Slider
      draggable
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      {...rest}
    >
      {[1, 2, 3, 4].map((n, i) => (
        <div key={i}>
          <CardMedia
            className={media}
            image="https://source.unsplash.com/random"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
