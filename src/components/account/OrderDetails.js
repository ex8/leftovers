import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

function createData(id, date, chef, dish, paymentMethod, amount) {
    return { id, date, chef, dish, paymentMethod, amount };
  }
  
const data = createData(0, '16 Mar, 2019', 'Elvis Presley', 'Cheddar', 'VISA ⠀•••• 3719', 312.44)

const useStyles = makeStyles(theme => ({
    card: {
        flex: 1
    },
    container: {
        flexGrow: 1,
        margin: theme.spacing(4)
    }
}))

const OrderDetails = (props) => {
    const { card, container } = useStyles();

    return (
        <div className={container}>
            <Container>
                <Card className={card}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Order {props.params}
                    </Typography>
                </Card>
            </Container>
        </div>
    )
};

const mapStateToProps = state => ({
    user: state.userReducer.user
});

export default connect(mapStateToProps)(OrderDetails);
