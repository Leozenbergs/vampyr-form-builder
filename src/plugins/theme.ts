import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b1c1cff", // crimson red (main accent color)
      light: "#d32f2f",
      dark: "#520105ff",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#1e88e5", // subtle blue for highlights or links
      light: "#6ab7ff",
      dark: "#005cb2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#4b0004ff", // main background
      paper: "rgb(17 24 39);", // card background
      // Add any additional background colors here
    },
    text: {
      primary: "#e6edf3", // bright white-blue text
      secondary: "#9ba1a6", // muted gray text
      disabled: "#6c757d",
    },
    divider: "#8b1c1cff", // faint card borders
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
    fontFamily: '"Arial", "Inter", "Roboto", "Helvetica", sans-serif',
    fontSize: 14,
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.6rem" },
    h3: { fontWeight: 600, fontSize: "1.4rem" },
    h4: { fontWeight: 600, fontSize: "1.2rem" },
    h5: { fontWeight: 500, fontSize: "1rem" },
    h6: { fontWeight: 500, fontSize: "0.9rem" },
    body1: { color: "#e6edf3" },
    body2: { color: "#ccc" },
    caption: { color: "#9ba1a6" },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(17 24 39);",
          borderRadius: "8px",
          border: "1px solid #8b1c1cff !important",
          boxShadow: "0 2px 6px rgba(224, 11, 11, 0.48)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 600,
          backgroundColor: "rgba(31,41,55, 0.8)",
          color: "#fff",
        },
        containedPrimary: {
          //backgroundColor: "#d32f2f",
          "&:hover": { backgroundColor: "#b71c1c" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(17 24 39);",
          borderBottom: "1px solid #2c2f33",
          boxShadow: "0 2px 6px rgba(224, 11, 11, 0.48)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(17 24 39);",
          border: "1px solid #2c2f33",
          boxShadow: "0 2px 6px rgba(224, 11, 11, 0.48)",
        },
      },
    },
  },
});

export default theme;