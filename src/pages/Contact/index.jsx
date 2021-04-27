import MyHeader from '../../components/MyHeader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import api from '../../services/api';
import MyFooter from '../../components/MyFooter';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  stylebox: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#cfe8fc'
  }
}));

export default () => {
  document.title = 'Contato - Currículo Martim Rafael Fuhr'

  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  

  async function onSave(event) {
    event.preventDefault();

    setInvalidData(false);
    setSaved(false);

    if (!name || !email || !phone || !comment) {
      setInvalidData(true);
    } else {
      await api.sendContact(name, email, phone, comment);
      setName('');
      setEmail('');
      setPhone('');
      setComment('');
      setSaved(true);
    }
  }

  function onDel(event) {
    event.preventDefault();

    setInvalidData(false);
    
      setName('');
      setEmail('');
      setPhone('');
      setComment('');
    }



  return (
    <Grid item xs={12} container className={classes.stylebox}>
      <div>
        <MyHeader/>
          <h1 style={{ marginTop: '30px'}}>Deseja contatar-me?</h1>
          <h2>Preencha os campos abaixo que logo retornarei!</h2>
          <form className={classes.root} autoComplete="off">
          {
              saved 
              ?
                <Box p={2} bgcolor="green" color="primary.contrastText">
                  Enviado com sucesso
                </Box>
                : ''
            }
            <TextField
            id="name" 
            label="Nome" 
            value={name}
            variant="outlined" 
            onChange={e => setName(e.target.value)} 
            error={invalidData} /><br/>

            <TextField
            id="email"
            label="Email"
            value={email}
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
            error={invalidData} /> <br/>

            <TextField
            id="phone"
            label="Telefone"
            type="number"
            value={phone}
            variant="outlined"
            onChange={e => setPhone(e.target.value)}
            error={invalidData} /><br/>

            <TextField id="comment"
            label="Mensagem"
            multiline rows={3} variant="outlined"
            value={comment}
            onChange={e => setComment(e.target.value)}
            error={invalidData}/> <br/>

            <Button style={{ width: '8%'}}
            variant="contained"
            onClick={onDel}>Limpar</Button>
            
            <Button style={{ width: '8%'}}
            variant="contained"
            backgroundColor="#1976d2"
            color="primary"
            onClick={onSave}>Enviar</Button>

          </form>
      </div>
      <MyFooter/>
    </Grid>
    
  );
}