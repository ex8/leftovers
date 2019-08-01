import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Fab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import CartDialog from './CartDialog';

const useStyles = makeStyles(theme => ({
  bottomRightCorner: {
		position: 'fixed',
		bottom: theme.spacing(2),
    right: theme.spacing(3),
	},
}));

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { bottomRightCorner } = useStyles();

  const onClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="Open Cart" aria-label="Open Cart">
					<Fab color="secondary" onClick={() => setOpen(!open)} className={bottomRightCorner}>
						<FontAwesomeIcon icon={faShoppingBasket} size="lg" />
					</Fab>
				</Tooltip>
        <CartDialog open={open} onClose={onClose} />
    </div>
  );
};

export default Cart;
