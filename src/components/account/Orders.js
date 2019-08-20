import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function createData(id, date, chef, dish, paymentMethod, amount) {
  return { id, date, chef, dish, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Cheddar', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'Pepper Jack', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Gouda', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Swiss', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Parmesan', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(2)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    margin: theme.spacing(2),
  },
  linkButton: {
    textDecoration: 'none'
  },
  tableCell: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}))

const Orders = ({ user }) => {
  const { card, container, linkButton, tableCell } = useStyles();

  return (
    <div className={container}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Card className={card}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Your Orders
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Chef</TableCell>
                  <TableCell>Dish</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                    <TableRow component={Link} to={`orders/${row.id}`} key={row.id} className={linkButton}>
                      <TableCell className={tableCell}>{row.date}</TableCell>
                      <TableCell className={tableCell}>{row.chef}</TableCell>
                      <TableCell className={tableCell}>{row.dish}</TableCell>
                      <TableCell  className={tableCell} align="right">{row.amount}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps)(Orders);
