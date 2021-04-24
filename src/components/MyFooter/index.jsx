import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  display: 'flex',
	  fixed: 'marginBottom'
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