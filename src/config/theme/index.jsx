import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import 'typeface-roboto';

export default createMuiTheme(
    {
        palette: {
            primary: {
                main: '#1976d2',
                light: '#e99a72',
                dark: '#f15b0f'
            },
            background: {
                default: '#f0f0f7',
            }
        },
        typography: {
            fontFamily: 'Roboto',
            fontSize: 16,
        },
        overrides: {
            MuiButton: {
                outlined: {
                    borderRadius: 30,
                }
            }
        }
    },
    ptBR
);