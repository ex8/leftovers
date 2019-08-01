import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Fab, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import CartDialog from './CartDialog';

const useStyles = makeStyles(theme => ({
  bottomRightCorner: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  badgeMargin: {
    margin: theme.spacing(2),
  },
}));

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { bottomRightCorner, badgeMargin } = useStyles();

  const onClose = () => setOpen(false);

  return (
    <div className={bottomRightCorner}>
      <Tooltip title="Open Cart" aria-label="Open Cart">
        <Badge className={badgeMargin} badgeContent={2} color="primary">
          <Fab color="secondary" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
          </Fab>
        </Badge>
      </Tooltip>
      <CartDialog open={open} onClose={onClose} />
    </div>
  );
};

export default Cart;
