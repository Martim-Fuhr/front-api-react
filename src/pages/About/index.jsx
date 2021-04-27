/* eslint-disable react/jsx-no-target-blank */
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Photop from '../../images/perfil.png';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
	root1: {
	  height: '85vh',
    borderColor: 'black',
	  justifyContent: 'center',
	  alignItems: 'center',
	  display: 'flex',
    backgroundColor: '#cfe8fc',
    marginTop: '15px'
	},
    paper: {
        textAlign: 'center',
  },
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
    return ['Apresentação', 'Objetivos', 'O que almejo?'];
  }


function getStepContent(step) {
    switch (step) {
      case 0:
        return `Me chamo Martim Rafael Führ, tenho 23 anos e moro na cidade de Sapiranga-RS.`;
      case 1:
        return `Atualmente estou em busca da minha primeira oportunidade na área do Desenvolvimento Web,
        onde eu possa me desenvolver e destacar como profissional, sempre em busca de novos desafios.`;
      case 2:
          return `Pretendo começar o curso superior de ADS o mais rápido possível, e em parelelo com isso, estar em uma empresa onde eu possa me dedicar e ser recompensado com muita experiência, onde meu sonho de evoluir como profissional anda lado a lado com o objetivo da empresa de ter um bom profissional.`;
      default:
        return 'Unknown Infos';
    }
  }


export default function About() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
        <React.Fragment>
        <MyHeader/>
        <Grid  item xs={12}>
			<Paper className={classes.paper}><h1>Martim Führ</h1></Paper>
		</Grid>

        <Grid container item xs={12} className={classes.root1}>
			<Grid item xs={12} sm={4}>
                <Container className={classes.root1}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Martim Image"    
                                image={Photop}
                                title="Martim Fuhr"/>
                        </CardActionArea>
                        <Typography variant="body2" color="textSecondary" component="p">

							Email: martimfuhr@hotmail.com <br/>
                            Celular: 51 995987124 <br/>
                            Data de Nascimento: 11/03/1998 <br/>
						</Typography>
                        <a href="https://github.com/Martim-Fuhr" target="_blank"><GitHubIcon/><i class="fab fa-github"></i></a>
                        <a href="https://cutt.ly/Whm6X0k" target="_blank"><LinkedInIcon/><i class="fab fa-linkedin"></i></a>
                    </Card>
                </Container>
            </Grid>

            <Grid item xs={12} sm={7}>
            <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    VOLTAR
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Terminar' : 'Próximo'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>"O sucesso é a soma de pequenos esforços repetidos dia após dia."</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Resetar
          </Button>
        </Paper>
      )}
    </div>
            </Grid>
        </Grid>
        <MyFooter/>
    </React.Fragment>
  );
}