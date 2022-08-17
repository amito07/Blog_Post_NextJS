import { CssBaseline } from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "../Components/Nav";
import "../Styles/Global.css";
import theme from "../Styles/theme";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp;
