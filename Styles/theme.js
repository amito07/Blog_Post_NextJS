import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    allVariants: {
      color: "#212121",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          right: -3,
          top: 4,
          padding: "0 4px",
          fontSize:'2rem'
        },
      },
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          height:'2.2em'
        }
      }
    }
  },

  palette: {
    common: {
      black: "#333",
      light: "#fff",
    },
    primary: {
      main: "#4871E8",
      light: "#6f8bec",
      dark: "#0056e2",
    },
    secondary: {
      main: "#2D1674",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
    },
    success: {
      light: "#388e3c",
      main: "#2e7d32",
      dark: "#1b5e20",
    },
    grey: {
      light: "#e0e0e0",
      main: "#bdbdbd",
      dark: "#9e9e9e",
    },
    divider: "#0056e2",
    background: {
      default: "#f6f6f6",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
    "rgba(0, 0, 0, 0.18) 0px 2px 4px",
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  ],
});

export default theme;
