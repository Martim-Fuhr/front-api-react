import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  display: 'flex',
	  bottom: '0'
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
	<div >
		<Typography className={classes.root} variant="body2" color="textSecondary" component="p">
			Copyright © Martim Fuhr
		</Typography>
	</div>
	);
  }