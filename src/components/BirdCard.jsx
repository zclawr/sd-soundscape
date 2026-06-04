import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BirdCard(props) {
    const { name, bio, imgSrc, impacts, threshold, currVol, ...other } = props;


    return (
    <Card variant="outlined" sx={{ display:"flex", maxWidth: "100%"}}>
        <CardMedia
        sx={{width: "30%" }}
        image={imgSrc}
        />
        <CardContent sx={{width: "70%" }}>
            <Typography gutterBottom variant="h6" component="div">
                {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {bio}
                <br/>
                <br/>
                <b>Acoustic Impacts</b> (Impact Threshold: {threshold} dB)
                <br/>
                {impacts}
            </Typography>
        </CardContent>
    </Card>
    );
}
