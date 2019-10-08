import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { red } from '@material-ui/core/colors'

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    height: 250,
  },
}));

const DataChart = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Orders ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={red[900]} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataChart;
