import React, { useState } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import CartDrawer from './CartDrawer';
import { getTotalQuantity } from '../utils/cart.helpers';

const Cart = ({ items }) => {
  const [open, setOpen] = useState(false);
  const totalQuantity = getTotalQuantity(items);
  return (
    <div>
      <IconButton color="inherit" onClick={() => setOpen(!open)}>
        <Badge invisible={totalQuantity === 0} badgeContent={totalQuantity} color="secondary">
          <FontAwesomeIcon icon={faShoppingCart} size="xs" />
        </Badge>
      </IconButton>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cartReducer.items,
});

export default connect(mapStateToProps)(Cart);
