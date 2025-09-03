import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { options } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        textAlign: 'center',
    },
    carouselItem: {
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        height: 400,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    carouselText: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: theme.spacing(2),
        borderRadius: 8,
        display: 'inline-block',
    },
    carouselButton: {
        marginTop: theme.spacing(2),
    },
}));

export default function HomeCarousel() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" gutterBottom>
                        Home Page
                    </Typography>
                    <Typography variant="h5" color="textSecondary" paragraph>
                        Explora contenido destacado, eventos y recomendaciones seleccionadas para ti.
                    </Typography>
                </Container>
            </div>

            <Container maxWidth="md">
                <Carousel
                    autoPlay={true}
                    interval={5000}
                    indicators={true}
                    navButtonsAlwaysVisible={true}
                >
                    {options.map((item) => (
                        <Paper
                            key={item.title}
                            className={classes.carouselItem}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className={classes.carouselText}>
                                <Typography variant="h4">{item.title}</Typography>
                                <ul>
                                    {item.description.map((line) => (
                                        <li key={line}>{line}</li>
                                    ))}
                                </ul>
                                <Link to="/pricing">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.carouselButton}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </Paper>
                    ))}
                </Carousel>
            </Container>
        </main>
    );
}
