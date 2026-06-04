import Card from '../../node_modules/@mui/material/Card';
import CardActions from '../../node_modules/@mui/material/CardActions';
import CardContent from '../../node_modules/@mui/material/CardContent';
import CardMedia from '../../node_modules/@mui/material/CardMedia';
import Button from '../../node_modules/@mui/material/Button';
import Typography from '../../node_modules/@mui/material/Typography';

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
