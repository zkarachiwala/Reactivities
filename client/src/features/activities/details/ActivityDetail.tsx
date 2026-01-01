import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router";

export default function ActivityDetail() {
  const navigate = useNavigate();
  const activity = {} as Activity;  

  if (!activity) return <Typography>Loading...</Typography>

  return (
    <Card sx={{ borderRadius: 4}}>
        <CardMedia
            component='img' 
            image={`/assets/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">
                {activity.title}
            </Typography>
            <Typography variant="subtitle1" fontWeight='light'>
                {activity.date}
            </Typography>
            <Typography variant="body1">
                {activity.description}
            </Typography>
            <CardActions>
                <Button color="primary" component={Link} to={`/createActivity/${activity.id}`}>Edit</Button>
                <Button color="inherit" onClick={() => navigate('/activities')}>Cancel</Button>
            </CardActions>
        </CardContent>
    </Card>
  )
}