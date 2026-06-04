import Card from '../../node_modules/@mui/material/Card';
import CardActions from '../../node_modules/@mui/material/CardActions';
import CardContent from '../../node_modules/@mui/material/CardContent';
import CardMedia from '../../node_modules/@mui/material/CardMedia';
import Button from '../../node_modules/@mui/material/Button';
import Typography from '../../node_modules/@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function BirdCard(props) {
    const { name, bio, imgSrc, impacts, threshold, currVol, ...other } = props;

    const theme = createTheme({
    palette: {
        primary: {
            main: '#206136',
        },
        secondary: {
            main: '#b6260c',
        },
    },

    });
    if (currVol >= threshold){
        return (
        <ThemeProvider theme={theme}>
            <Card variant="outlined" sx={{ display:"flex", maxWidth: "100%"}}>
                <CardMedia
                sx={{width: "30%" }}
                image={imgSrc}
                />
                <CardContent sx={{width: "70%" }}>
                    <Typography gutterBottom variant="h6" component="div" color='secondary'>
                        {name}
                    </Typography>
                    <Typography variant="body2" color='secondary'>
                        {bio}
                        <br/>
                        <br/>
                        <b>Acoustic Impacts</b> (Impact Threshold: {threshold} dB)
                        <br/>
                        {impacts}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
        );
    }
    else{
        return (
        <ThemeProvider theme={theme}>
            <Card variant="outlined" sx={{ display:"flex", maxWidth: "100%"}}>
                <CardMedia
                sx={{width: "30%" }}
                image={imgSrc}
                />
                <CardContent sx={{width: "70%" }}>
                    <Typography gutterBottom variant="h6" component="div" color='primary'>
                        {name}
                    </Typography>
                    <Typography variant="body2" >
                        {bio}
                        <br/>
                        <br/>
                        <b>Acoustic Impacts</b> (Impact Threshold: {threshold} dB)
                        <br/>
                        {impacts}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
        );
    }
}
