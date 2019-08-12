import React, { useState } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartDrawer from './CartDrawer';

const Cart = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton color="inherit" onClick={() => setOpen(!open)}>
        <Badge badgeContent={2} color="secondary">
          <FontAwesomeIcon icon={faShoppingCart} size="xs" />
        </Badge>
      </IconButton>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Cart;
