import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CharacterCardProps = {
  item: {
    name: string;
    description: string;
  }
}

export default function CharacterCard({ item }: CharacterCardProps) {
  console.log(item)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/600/400"
        title={item?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
