import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b1c1cff", // crimson red (main accent color)
      light: "#d32f2f",
      dark: "#520105ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e88e5", // subtle blue for highlights or links
      light: "#6ab7ff",
      dark: "#005cb2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#4b0004ff", // main background
      paper: "#161b22", // card background
    },
    text: {
      primary: "#e6edf3", // bright white-blue text
      secondary: "#9ba1a6", // muted gray text
      disabled: "#6c757d",
    },
    divider: "#2c2f33", // faint card borders
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
  },
  
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.6rem" },
    h3: { fontWeight: 600, fontSize: "1.4rem" },
    h4: { fontWeight: 600, fontSize: "1.2rem" },
    h5: { fontWeight: 500, fontSize: "1rem" },
    h6: { fontWeight: 500, fontSize: "0.9rem" },
    body1: { color: "#e6edf3" },
    body2: { color: "#9ba1a6" },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22",
          borderRadius: "8px",
          border: "1px solid #8b1c1cff !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#d32f2f",
          "&:hover": { backgroundColor: "#b71c1c" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22",
          borderBottom: "1px solid #2c2f33",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22",
          border: "1px solid #2c2f33",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        },
      },
    },
  },
});

export default theme;