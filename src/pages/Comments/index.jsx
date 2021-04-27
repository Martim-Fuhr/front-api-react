import MyHeader from '../../components/MyHeader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MyFooter from '../../components/MyFooter'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'center',
    },
  },
  stylebox: {
    height: '96vh',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#cfe8fc'
  }
}));

export default function Comments() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [invalidData, setInvalidData] = useState(false);
  const [saved, setSaved] = useState(false);

  function onSave(event) {
    event.preventDefault();
    setInvalidData(false);
    setSaved(false);

    if (!name || !comment) {
        setInvalidData(true);
    } else {
      setName('');
      setComment('');
      setSaved(true);
      }
  }

  function onDel(event) {
    event.preventDefault();
    setInvalidData(false);
    
      setName('');
      setComment('');
    }

  return (
    <div>
      <Grid item xs={12} className={classes.stylebox}>
        <div>
          <MyHeader/>
            <h1 style={{ marginTop: '30px'}}>E aí, o que achou da página?</h1>
            <h2>Se quiser, deixe uma mensagem!</h2>
            <form className={classes.root} noValidate autoComplete="off">

              <TextField
              id="name"
              label="Nome"
              variant="outlined"
              onChange={e => setName(e.target.value)}
              error={invalidData} /> <br/>

              <TextField id="comment"
              label="Mensagem"
              multiline rows={3}
              variant="outlined"
              onChange={e => setComment(e.target.value)}
              error={invalidData}/> <br/>

              <Button style={{ width: '8%'}}
              variant="contained"
              onClick={onDel}>
                Limpar
              </Button>

              <Button style={{ width: '8%'}}
              variant="contained"
              color="primary"
              onClick={onSave}>
                Enviar
              </Button>
              {
                saved 
                  ?
                  <Box p={2} bgcolor="green" color="primary.contrastText">
                    Salvo
                  </Box>
                  : ''
                        }
            </form>
        </div>
      </Grid>
      <MyFooter/>
    </div>
  );
}