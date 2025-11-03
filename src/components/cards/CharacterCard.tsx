import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Paper, Stack, styled } from '@mui/material';
import { useMemo } from 'react';
import { Edit, Visibility } from '@mui/icons-material';

type CharacterCardProps = {
  item: {
    name: string;
    description: string;
    generation?: number;
    bloodPotency?: number;
    humanity?: number;
  }
}

export default function CharacterCard({ item }: CharacterCardProps) {

  const Attribute = styled(Stack)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px'
  });
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const cardColor = useMemo(getRandomColor, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Paper elevation={0} sx={{ height: 140, width: '100%', backgroundColor: cardColor, borderRadius: "0px", border: "0px solid transparent !important", boxShadow: "none !important" }} />
      <CardContent>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'start', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: cardColor, width: 56, height: 56, mb: 2 }} src='image="https://picsum.photos/600/400"' />
          <div style={{marginLeft: "15px"}}>{item?.name ?? 'Unnamed Character'}</div>
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item?.description ?? 'No description available.'}
          <Attribute direction="row" spacing={1}>
            <b>Generation:</b> {item?.generation ?? 'Unknown'}
          </Attribute>
          <Attribute direction="row" spacing={1}>
            <b>Blood potency:</b> {item?.bloodPotency ?? 'Unknown'}
          </Attribute>
          <Attribute direction="row" spacing={1}>
            <b>Humanity:</b> {item?.humanity ?? 'Unknown'}
          </Attribute>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button size="small" sx={{ p: 1, width: "50%" }} >
          <Visibility sx={{ mr: 1 }} /> View
        </Button>
        <Button size="small" sx={{ p: 1, backgroundColor: 'primary.main', width: "50%" }}>
          <Edit sx={{ mr: 1 }} /> Edit
        </Button>
      </CardActions>
    </Card>
  );
}

