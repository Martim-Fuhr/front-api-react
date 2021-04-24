import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';

export default () =>  {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
}