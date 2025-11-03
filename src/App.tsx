import { ThemeProvider } from '@mui/material';
import { Default } from './layouts/Default';
import theme from './plugins/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Default />
    </ThemeProvider>
  );
}

export default App;