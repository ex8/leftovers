import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,
          Card, 
          Grid, 
          Hidden, 
          Table, 
          TableBody, 
          TableCell, 
          TableHead, 
          TableRow, 
          Typography
        } from '@material-ui/core';
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
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4)
  },
  container: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  tableCell: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textDecoration: 'none'
  }
}))

const Orders = () => {
  const { card, container, tableCell } = useStyles();

  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Card className={card}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Your Orders
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Dish</TableCell>
                    <Hidden smDown>
                      <TableCell>Chef</TableCell>
                    </Hidden>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell 
                          component={Link} 
                          to={`orders/${row.id}`}
                          className={tableCell}
                        >
                          {row.date}
                        </TableCell>
                        <TableCell
                          component={Link}
                          to={`orders/${row.id}`}
                          className={tableCell}
                        >
                          {row.dish}
                        </TableCell>
                        <Hidden smDown>
                          <TableCell
                            component={Link}
                            to={`orders/${row.id}`}
                            className={tableCell}
                          >
                            {row.chef}
                          </TableCell>
                        </Hidden>
                        <TableCell
                          component={Link}
                          to={`orders/${row.id}`}
                          className={tableCell}
                          align="right"
                        >
                          {row.amount}
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps)(Orders);
