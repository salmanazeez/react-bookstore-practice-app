import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Container } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//   }));

  export default function BookDetails() {
  
    return (
        <div className="book-details-container">
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
              </Col>
            </Row>
            <Container maxWidth="lg" className="container-footer">
                <Row>
                    <Col sm={12} md={5}></Col>
                    <Col sm={12} md={7}>
                        <Typography gutterBottom variant="body1" component="p" className="book-container-heading">The Original Illustrated Sherlock Homes</Typography>
                        <Button variant="danger" className="book-details-btn">Read book</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }