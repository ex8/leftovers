import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, Container, Grid, Typography, Avatar, CardHeader,
  CardContent, CardActions, Button, List, ListItem,
  ListItemAvatar, ListItemText, IconButton, Divider,
  Paper, Table, TableBody, TableHead, TableCell, TableRow,
  Hidden,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faCreditCard, faAngleDoubleRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin, faBuffer } from '@fortawesome/free-brands-svg-icons';
import { purple, indigo, green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    flex: 1,
    padding: theme.spacing(4),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  purpleAvatar: {
    backgroundColor: purple[400],
  },
  blueAvatar: {
    backgroundColor: indigo[400],
  },
  greenAvatar: {
    backgroundColor: green[400],
  },
  content: {
    padding: theme.spacing(0),
  },
  listContainer: {
    maxHeight: 300,
    overflow: 'auto',
  },
  image: {
    width: 48,
    height: 48,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  payAvatar: {
    backgroundColor: '#FF9900',
    borderRadius: 0,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  table: {
    maxHeight: 300,
    overflow: 'auto',
  },
}));

const Dashboard = ({ user }) => {
  const {
    card, container, linkButton, avatar, purpleAvatar,
    blueAvatar, greenAvatar, content, listContainer,
    image, actions, payAvatar, rightIcon, table
  } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Hi, {user.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/dishes" className={linkButton}>
              <Card className={card}>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="h4">4</Typography>
                    <Typography variant="subtitle1">Total Dishes</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={[avatar, purpleAvatar].join(' ')}>
                      <FontAwesomeIcon icon={faUtensils} size="lg" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="h4">24</Typography>
                    <Typography variant="subtitle1">Completed Orders</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={[avatar, blueAvatar].join(' ')}>
                      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/payments" className={linkButton}>
              <Card className={card}>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="h4">24</Typography>
                    <Typography variant="subtitle1">Payments Made</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={[avatar, greenAvatar].join(' ')}>
                      <FontAwesomeIcon icon={faCreditCard} size="lg" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardHeader
                title="Latest Dishes"
                action={<Button size="small" color="primary" variant="outlined">Add Dish</Button>}
                titleTypographyProps={{
                  variant: 'h6',
                }}
              />
              <Divider />
              <CardContent className={content}>
                <List className={listContainer}>
                  {[1, 2, 3, 4, 5, 6, 7].map((n, i) => (
                    <ListItem key={i} divider={i < 7}>
                      <ListItemAvatar>
                        <img className={image} src="https://source.unsplash.com/random" alt="dishImage" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Fried Chicken Sandwich"
                        secondary="Last updated 2 days ago"
                      />
                      <IconButton>
                        <FontAwesomeIcon icon={faEdit} size="xs" />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions className={actions}>
                <Button color="primary">
                  View All Dishes
                  <FontAwesomeIcon className={rightIcon} icon={faAngleDoubleRight} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardHeader
                title="Active Payment Gateways"
                titleTypographyProps={{
                  variant: 'h6',
                }}
              />
              <Divider />
              <CardContent className={content}>
                <List className={listContainer}>
                  {[1, 2, 3, 4, 5].map((n, i) => (
                    <ListItem key={i} divider={i < 5}>
                      <ListItemAvatar>
                        <Avatar className={payAvatar}>
                          <FontAwesomeIcon icon={faBitcoin} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Bitcoin"
                        secondary="Last updated on 8/18/2019 at 10:44 AM"
                      />
                      <IconButton>
                        <FontAwesomeIcon icon={faBuffer} />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions className={actions}>
                <Button color="primary">
                  View All Gateways
                  <FontAwesomeIcon className={rightIcon} icon={faAngleDoubleRight} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Latest Orders"
                titleTypographyProps={{
                  variant: 'h6',
                }}
              />
              <Divider />
              <CardContent className={content}>
                <Table className={table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Created</TableCell>
                      <Hidden xsDown><TableCell>Total</TableCell></Hidden>
                      <Hidden smDown><TableCell>Status</TableCell></Hidden>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
                      <TableRow key={i} hover>
                        <TableCell component="th" scope="row">2 items</TableCell>
                        <TableCell>9/13/2019 - 9:45pm</TableCell>
                        <Hidden xsDown><TableCell>$9.99</TableCell></Hidden>
                        <Hidden smDown>
                          <TableCell>Completed</TableCell>
                        </Hidden>
                        <TableCell>
                          <Link className={linkButton} to={`/account/orders/idbruh`}>
                            <Button size="small" variant="contained" color="secondary">View</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardActions className={actions}>
                <Button color="primary">
                  View All Orders
                  <FontAwesomeIcon className={rightIcon} icon={faAngleDoubleRight} />
                </Button>
              </CardActions>
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

export default connect(mapStateToProps)(Dashboard);
