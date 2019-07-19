import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardActions, CardContent,
  CardMedia, Grid, Container, Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardStyle: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flex: 1,
  },
}));

const Featured = () => {
  const { cardGrid, cardStyle, cardMedia, cardContent } = useStyles();
  const cards = [1, 2, 3];
  return (
    <div>
      <Container className={cardGrid} maxWidth="md">
        <Grid container>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Popular Dishes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={cardStyle}>
                <CardMedia
                  className={cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                    </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View Dish</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;
