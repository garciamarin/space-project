import "./App.css";
import LiveDataComp from "./LiveData";
import ContentfulDataComp from "./ContentfulData";
import AppBarComp from "./AppBar";
import { Grid, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GetBtc from './btc_ticker';
import GetWisdom from './random_wisdom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1427",
      light: "#1C1427",
      dark: "#1C1427",
    },
  },
  typography: {
    fontFamily: "Space Mono",
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <AppBarComp />
        </header>
        <main style={{ marginTop: 60 }}>
          <Grid
            container
            spacing={2}
            rowSpacing={3}
            justifyContent="space-around"
          >
            <Grid item xs={12} md={4}>
              <Grid item>
                <GetWisdom />
              </Grid>
              <Grid item>
                <GetBtc />
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid item>
                <ContentfulDataComp />
              </Grid>
            </Grid>
          </Grid>
        </main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;