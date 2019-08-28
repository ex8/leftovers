import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, IconButton, Select, Divider, Grid, Typography, FormControl, OutlinedInput, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  formControl: {
    flex: 1,
  },
  text: {
    paddingLeft: theme.spacing(1),
  },
}));

const CartItems = ({ items }) => {
  const { container, formControl, text } = useStyles();
  return (
    <div className={container}>
      <List>
        {Object.keys(items).map((key, i) => (
          <div key={i}>
            <ListItem>
              <Grid container>
                <Grid item xs={3}>
                  <FormControl className={formControl} variant="outlined">
                    <Select
                      value={items[key].quantity}
                      onChange={() => {}}
                      input={<OutlinedInput name="quantity" />}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={7} className={text}>
                  <Typography>{items[key].dish.title}</Typography>
                  <Typography variant="subtitle2">${items[key].dish.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <FontAwesomeIcon icon={faTimes} />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="middle" light />
          </div>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cartReducer.items,
});

export default connect(mapStateToProps)(CartItems);
