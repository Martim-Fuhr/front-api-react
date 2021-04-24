import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyHeader from '../../components/MyHeader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HtmlCss from '../../images/htmlcss.png';
import JsImg from '../../images/jsimg.png';
import NodeImg from '../../images/nodejs.png';
import ReactImg from '../../images/reactjsx.png';
import PostImg from '../../images/posts.png'

const useStyles = makeStyles((theme) => ({
	root1: {
	  flexGrow: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  display: 'flex'
	},
	root2: {
		maxWidth: 345,
		marginBottom: 15
	  },
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center'
	},
  }));
export default function Aboutjobs() {
	const classes = useStyles();
	return (
		<div className={classes.root1}>
			<MyHeader/>
			<Grid container spacing={2}>
				<Grid  item xs={12}>
					<Paper className={classes.paper}><h1 style={{marginTop: 50}}>Aprendizado e Conhecimentos</h1></Paper>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card className={classes.root2}>
    					<CardActionArea>
        					<CardMedia
          					component="img"
          					alt="HTML e CSS Image"
          					height="120"
							width="90"
          					image={HtmlCss}
          					title="Imagem HTML e CSS"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									HTML e CSS </Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Meus conhecimentos em HTML e CSS começaram em 2015, no início do meu curso técnico, e desde então sempre andei praticando, agora na Growdev, me aprofundei bastante, e nos componentes que facilitam na sua construção.
								</Typography>
							</CardContent>
      					</CardActionArea>
    				</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card className={classes.root2}>
    					<CardActionArea>
        					<CardMedia
          					component="img"
          					alt="JS Image"
          					height="140"
							width="90"
          					image={JsImg}
          					title="Imagem JS"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									JavaScript</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Conheci o JavaScript em agosto de 2020, e desde então o utilizo quase todo dia, seja em meus estudo ou brincando com alguma aplicação que esteja tentando desenvolver.
								</Typography>
							</CardContent>
      					</CardActionArea>
    				</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card className={classes.root2}>
    					<CardActionArea>
        					<CardMedia
          					component="img"
          					alt="React Image"
          					height="140"
							width="90"
          					image={ReactImg}
          					title="Imagem React"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									React</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Comei a utilizar o React este ano, já conheço a estrutura de componentes e uma boa parte de suas bibliotecas, que ajudam na sua utilização.<br/>
								<br/>
								</Typography>
							</CardContent>
      					</CardActionArea>
    				</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card className={classes.root2}>
    					<CardActionArea>
        					<CardMedia
          					component="img"
          					alt="Node Image"
          					height="140"
							width="90"
          					image={NodeImg}
          					title="Imagem Node"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Node</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Tive meu primeiro contato com o ES6+ e o Node este ano, consumi algumas API's e até então vem se mostrando uma tecnologia muito interessante.<br/>
								<br/>
								</Typography>
							</CardContent>
      					</CardActionArea>
    				</Card>
				</Grid>
				
				<Grid item xs={12} sm={4}>
					<Card style={{marginLeft: '20px'}}className={classes.root2}>
						<CardActionArea>
							<CardMedia
							component="img"
							alt="Node Image"
							height="140"
							width="90"
							image={PostImg}
							title="Imagem Node"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									PostgreSQL</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Até este ano o PostgreSQL era desconhecido para mim, mas como há alguns anos já tinha visto algo com o MySQL, a lógica inicial foi bem tranquila, hoje em dia sua utilização está bem tranquila.
									<br/>
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

			</Grid>
		</div>
	);
  }
