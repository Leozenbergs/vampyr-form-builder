import { createTheme, ThemeProvider } from '@mui/material';
import { Default } from './layouts/Default';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Default />
    </ThemeProvider>
  );
}

export default App;