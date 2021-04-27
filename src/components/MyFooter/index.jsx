import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
	root: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  display: 'flex',
	  bottom: '0',
	  backgroundColor: '#cfe8fc'
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<Grid container item xs={12} className={classes.root}>
			<Typography className={classes.root} variant="body2" color="textSecondary" component="p">
				Copyright © Martim Fuhr
			</Typography>
		</Grid>

	);
  }