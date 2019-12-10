import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cards from '../components/card';
import HorizontalCard from '../components/horizontal-card';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EDF2F4',
    },
    secondary: {
        main: '#D90429'
      },
    }
  },
)

export default function HomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className="customize-navbar">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" {...a11yProps(0)} className="nav-title" />
            <Tab label="Categories" {...a11yProps(1)} className="nav-title" />
            <Tab label="Events" {...a11yProps(2)} className="nav-title" />
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
      <TabPanel value={value} index={0} className="homepage-container">
        <div className="header-img">
          <img src={require('../assets/img/crushing-it.jpg')} alt="holder"/>
          <div className="img-text">
            <h1>Crushing it!</h1>
            <p>How Great Entrepreneurs Build Their Business and Influence-and How You Can, Too</p>
            <Button variant="danger" className="read-btn">Read book</Button>
          </div>
        </div>
      
        <Container maxWidth="lg">
          <Typography gutterBottom variant="h4" component="h1" className="featured-heading">Featured books</Typography>
          <Cards></Cards>
          <Cards></Cards>
        </Container>

        <Container maxWidth="lg">
          <Typography gutterBottom variant="h4" component="h1" className="featured-heading">Wishlist</Typography>
          <HorizontalCard></HorizontalCard>
          <HorizontalCard></HorizontalCard>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Panel two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Panel three
      </TabPanel>
    </div>
  );
}