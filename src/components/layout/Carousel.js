import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Avatar, } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: teal[200],
    width: 75,
    height: 75,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", left: '3%', zIndex: 1 }}
    onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", left: '93%', zIndex: 1 }}
    onClick={onClick}
  />
);

const AWS_S3_PUBLIC_URL = `https://leftovers-app.s3-us-west-1.amazonaws.com`;

const Carousel = ({ images, ...rest }) => {
  const { card, avatar, media } = useStyles();
  return (
    <div>
      {images.length === 0 && (
        <div className={card}>
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faImages} size="2x" />
          </Avatar>
        </div>
      )}
      {images.length !== 0 && (
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
        {/* {images.length === 0 && 'no images..'} */}
        {images.length !== 0 && images.map((image, i) => (
          <div key={i}>
            <CardMedia
              className={media}
              image={`${AWS_S3_PUBLIC_URL}/${image}`}
            />
          </div>
        ))}
      </Slider>
      )}
    </div>
  );
};

export default Carousel;
