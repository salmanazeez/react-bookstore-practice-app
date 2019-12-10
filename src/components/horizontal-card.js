import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

export default function HorizontalCard() {
    const classes = useStyles();
  
    return (
        <div className="horizontal-card-container"> 
          <Card className={classes.card}>
            <CardActionArea>
              <Row>
                <Col sm={12} md={4}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    className="card-image"
                    image="https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg"
                    title="Contemplative Reptile"
                  />
                </Col>
                <Col sm={12} md={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sherlock Holmes
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Col>
              </Row>
            </CardActionArea>
          </Card>
        </div>
    );
  }