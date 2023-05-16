
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Nav from './components/Nav';
import FullWidthTabs from './components/Tab';
import About from './components/About';
import ProminentAppBar from './components/PromientAppBar';
import VerticalTabs from './components/Request';
import SwipeableEdgeDrawer from './components/Chatbot';






const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000',
      light: '#ff0000',
    },
    secondary: {
      main: '#ffffff',
    },
    black: createColor('#000000'),
    grey: createColor("#6C767D"),
    yellow: createColor('#ffd300'),
    green: createColor('#46C016'),
    red : createColor('#FF0000'),
    
  },
});
function App() {
  return (
   
    <div className="App gradient-background">
       <ThemeProvider theme={darkTheme}>
      <About></About>
      <Nav></Nav>
      <VerticalTabs></VerticalTabs>
      <SwipeableEdgeDrawer></SwipeableEdgeDrawer>
      </ThemeProvider>
    </div>
   

  );
}

export default App;
