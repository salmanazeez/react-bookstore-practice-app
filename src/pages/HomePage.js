import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cards from '../components/card';
import HorizontalCard from '../components/horizontal-card';
import BookDetails from '../components/book-details';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarDrawer from '../components/nav'

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

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <NavbarDrawer></NavbarDrawer>
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
          <Row>
            <Col sm={12} md={6}>
              <Typography gutterBottom variant="h4" component="h1" className="featured-heading">Wishlist</Typography>
              <HorizontalCard></HorizontalCard>
              <HorizontalCard></HorizontalCard>
            </Col>
            <Col sm={12} md={6}>
              <Typography gutterBottom variant="h4" component="h1" className="featured-heading">Documentry</Typography>
              <HorizontalCard></HorizontalCard>
              <HorizontalCard></HorizontalCard>
            </Col>
          </Row>
        </Container>
        
        <Container maxWidth="lg">
          <div className="featured-book-container">
            <Row>
              <Col sm={12} md={5}>
                <img src={require('../assets/img/sherlock.jpg')} alt="holder"/>
              </Col>
              <Col sm={12} md={7} className="book-container-texts">
                <Typography gutterBottom variant="h5" component="h2" className="book-container-heading">The Original Illustrated Sherlock Homes</Typography>
                <Typography gutterBottom variant="subtitle1" component="p" className="book-author">by Arthur Conan Doyle</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent" className="book-rating">
                  <Rating name="read-only" value={4} readOnly className="rating-stars"/>
                </Box>
                <Typography gutterBottom variant="subtitle1" component="p" className="book-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                <Button variant="danger" className="featured-book-btn">Read book</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookDetails></BookDetails>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Panel three
      </TabPanel>
    </div>
  );
}