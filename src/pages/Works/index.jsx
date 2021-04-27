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
import JogoOne from '../../images/memoriaone.png';
import ScrapOne from '../../images/scrapone.png';
import MarvelOne from '../../images/marvel.png';
import MyFooter from '../../components/MyFooter';

const useStyles = makeStyles((theme) => ({
	root1: {
	  flexGrow: 1,
	  backgroundColor: '#cfe8fc'
	},
	root2: {
		maxWidth: 345,
		marginBottom: 15
	  },
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	},
	spacing: {
		padding: theme.spacing(2),
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		marginLeft: '0.5',
		marginRight: '0.5'
	},
	flexrr: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		marginLeft: '0.5',
		marginRight: '0.5'
	}
  }));
export default function Aboutjobs() {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root1}>
				<MyHeader/>
				<Grid container spacing={1}>
					<Grid  item xs={12}>
						<Paper className={classes.paper}><h1>Trabalhos Realizados</h1></Paper>
					</Grid>

					<Grid container item xs={12} style={{marginBottom: '20px'}}>
						<Grid item xs={6}>
							<Card>
								<CardActionArea>
									<CardMedia
									component="img"
									alt="JogodaMemoria Image"
									image={JogoOne}
									title="Imagem JogodaMemoria"/>
								</CardActionArea>
							</Card>
						</Grid>

						<Grid item xs={6} className={classes.spacing}>
							<CardContent>
								<Typography gutterBottom variant="h4" component="h1">
									Jogo da Memória</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Este jogo da memória foi feito no início do curso, em meados de setembro de 2020, nele, utilizamos apenas HTML, CSS e JS.
								</Typography>
							</CardContent>	
						</Grid>
					</Grid>
					
					<Grid container item xs={12} style={{marginBottom: '20px', marginTop: '40px'}}>
						<Grid item xs={12} sm={4} className={classes.flexrr}>
							<CardContent>
								<Typography gutterBottom variant="h4" component="h1" className={classes.flexrr}>
									ScrapBook</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									O ScrapBook é uma página de recados, onde ao clicar no botão superior direito '+', somos transferidos para a página para preencher os campos solicitados, e após, reenviados novamente para a página inicial com nosso
									nossos recados. Inicialmente ele foi construído com HTML, CSS e JS, e recentemente refeito com o REACT.
								</Typography>
							</CardContent>	
						</Grid>
						<Grid item xs={12} sm={8}>
							<Card>
								<CardActionArea>
									<CardMedia
									component="img"
									alt="Scrapbook Image"
									image={ScrapOne}
									title="Imagem Scrapbook"/>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>

					<Grid container item xs={12} style={{marginBottom: '20px', marginTop: '40px'}}>
						<Grid item xs={12} sm={6}>
							<Card>
								<CardActionArea>
									<CardMedia
									component="img"
									alt="APIMarvel Image"
									image={MarvelOne}
									title="Imagem APIMarvel"/>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} className={classes.spacing}>
							<CardContent>
								<Typography gutterBottom variant="h4" component="h1">
									API Marvel</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Neste projeto, consumimos uma API da Marvel em nossa própria API, tudo feito em NODE, e um pouco de HTML e CSS. A intenção era trazer os personagens
									na tela, e ao passar o mouse em cima, seria dado um estilo com seu nome,
									e ao clicar seria passada todas as informações do personagem.
								</Typography>
							</CardContent>	
						</Grid>
					</Grid>
						
				</Grid>
			</div>
		<MyFooter/>
		</div>
	);
  }
