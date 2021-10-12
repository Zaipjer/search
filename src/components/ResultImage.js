import { Grid, Link } from '@mui/material';
import React from 'react';
import './ResultImage.css';

const ResultImage = ({ data: { title, pagemap, link } }) => {
    return (
        <Grid item xl={2} lg={2} md={3} sm={4} xs={4} className="resultImage">
            <Link href={link}>
                <img className="image" src={pagemap.cse_thumbnail[0].src} alt={title} />
            </Link>
            <Link href={link}>
                <p>{title}</p>
                <p>{link}</p>
            </Link>
        </Grid>
    );
}

export default ResultImage;