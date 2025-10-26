import { Container, Grid, Paper, styled, Typography, } from '@mui/material';
import CharacterCard from '../components/cards/CharacterCard';

type CharacterCardProps = {
  item: {
    name: string;
    description: string;
  }
}

interface CampaignCardProps extends CharacterCardProps {
  item: {
    name: string;
    description: string;
    characters: CharacterCardProps['item'][];
  }
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 120,
}));

function Dashboard() {
  const rollNumber = 42 // Placeholder for future dice roll tracking feature
  const currentChars = localStorage.getItem("characters") ?? "[]"
  const currentCamps = localStorage.getItem("campaigns") ?? "[]"

  const charNumber = JSON.parse(currentChars).length ?? 0
  const campNumber = JSON.parse(currentCamps).length ?? 0

  return (
    <Container
      sx={{
        minWidth: '80vw',
        minHeight: "70vh"
      }}
    >
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={4}>
          <Item>
            Active characters <Typography variant="h4" sx={{ ml: 2 }}>{charNumber}</Typography>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            Active campaigns <Typography variant="h4" sx={{ ml: 2 }}>{campNumber}</Typography>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            Dice rolls today <Typography variant="h4" sx={{ ml: 2 }}>{rollNumber}</Typography>
          </Item>
        </Grid>
      </Grid>
      { charNumber > 0 && (
        <>
          <Typography variant='h3'>Recent characters</Typography>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {JSON.parse(currentChars).map((item: CharacterCardProps['item'], index: number) => 
              <Grid size={3} key={index}>
                <CharacterCard item={item} />
              </Grid>
            )}
          </Grid>
        </>
      )}
      { campNumber > 0 && (
        <>
          <Typography variant='h3'>Recent campaigns</Typography>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {JSON.parse(currentCamps).map((item: CampaignCardProps['item'], index: number) => 
              <Grid size={3} key={index}>
                <CharacterCard item={item} />
              </Grid>
            )}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Dashboard;