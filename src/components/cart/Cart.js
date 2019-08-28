import React, { useState } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import CartDrawer from './CartDrawer';

const Cart = ({ count }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton color="inherit" onClick={() => setOpen(!open)}>
        <Badge invisible={count === 0} badgeContent={count} color="secondary">
          <FontAwesomeIcon icon={faShoppingCart} size="xs" />
        </Badge>
      </IconButton>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.cartReducer.count,
});


export default connect(mapStateToProps)(Cart);
