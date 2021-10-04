import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
        },
     backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
