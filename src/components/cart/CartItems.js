import React from 'react';
import { List, ListItem, IconButton, Divider, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
  return (
    <div>
      <List>
        {[1, 2, 3, 4, 5].map((c, i) => (
          <div key={i}>
            <ListItem>
              <Grid container>
                <Grid item xs={2}>
                  <Typography>
                    1x
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Paella Dish
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>
                    $4.99
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <FontAwesomeIcon icon={faTimes} />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default CartItems;
