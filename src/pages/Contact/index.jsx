import MyHeader from '../../components/MyHeader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  stylebox: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [invalidData, setInvalidData] = useState(false);
  const [saved, setSaved] = useState(false);

  function onSave(event) {
    event.preventDefault();
    setInvalidData(false);
    setSaved(false);

    if (!name || !email || !phone || !comment) {
        setInvalidData(true);
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setComment('');
      setSaved(true);
      }
  
  }



  return (
    <Grid item xs={12} container className={classes.stylebox}>
      <div>
        <MyHeader/>
          <h1 style={{ marginTop: '30px'}}>Deseja contatar-me?</h1>
          <h2>Preencha os campos abaixo que logo retornarei!</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="name" label="Nome" variant="outlined" onChange={e => setName(e.target.value)} error={invalidData} /> <br/>
            <TextField id="email" label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} error={invalidData} /> <br/>
            <TextField id="phone" label="Telefone" type="number" variant="outlined" onChange={e => setPhone(e.target.value)} error={invalidData} /> <br/>
            <TextField id="comment" label="Mensagem" multiline rows={3} variant="outlined" onChange={e => setComment(e.target.value)} error={invalidData}/> <br/>
            <Button style={{ width: '8%'}} variant="contained">Limpar</Button>
            <Button style={{ width: '8%'}} variant="contained" color="primary" onClick={onSave}>Enviar</Button>
            {
              saved 
                    ?   <Box p={2} bgcolor="green" color="primary.contrastText">
                            Enviado com sucesso
                        </Box>
                      : ''
                      }
          </form>
      </div>
    </Grid>
    
  );
}