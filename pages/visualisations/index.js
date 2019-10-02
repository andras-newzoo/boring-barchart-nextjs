import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageCard from "../../components/ImageCard/ImageCard.component";
import { makeStyles } from '@material-ui/core/styles';
import contentData from '../../static/data/mainContent'
import { styled } from '@material-ui/styles';
import Header from "../../components/NavBar/Header";
import { Helmet } from 'react-helmet'

const ImageCardContainer = styled(Paper)({
    overflow: 'hidden',
    minHeight: '100%',
    maxHeight: '100%'
});

const useStyles = makeStyles(theme => ({
  placeholder: {
    [theme.breakpoints.down('lg')]: {
      height: '15rem'
    },
    [theme.breakpoints.down('md')]: {
      height: '12.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      height: '10rem'
    },
  }
}));

const Index = () => {
  const classes = useStyles();
  return <>
    <Helmet>
      <title>Visualisations</title>
    </Helmet>
    <Header/>
    <div className={classes.placeholder} />
    <Container>
      <Grid container spacing={4}>
        {
          contentData.map(c => (
            <Grid item xs={12} sm={6} md={4}>
              <ImageCardContainer>
                <ImageCard
                  {...c}
                />
              </ImageCardContainer>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  </>
}

export default Index;
