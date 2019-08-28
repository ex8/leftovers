import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, IconButton, Select, Divider, Grid, Typography, FormControl, OutlinedInput, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { removeItem, updateItemQuantity } from '../../redux/actions/cart.actions';

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

const CartItems = ({ items, removeItem, updateItemQuantity }) => {
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
                      onChange={e => updateItemQuantity(items[key].dish, e.target.value)}
                      input={<OutlinedInput name="quantity" />}
                    >
                      {Array.from(Array(99).keys()).slice(1).map((x, i) => <MenuItem key={i} value={x}>{x}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={7} className={text}>
                  <Typography>{items[key].dish.title}</Typography>
                  <Typography variant="subtitle2">${items[key].dish.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => removeItem(items[key].dish)}>
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

const mapDispatchToProps = {
  removeItem,
  updateItemQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
