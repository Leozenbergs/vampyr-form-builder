import { Container, Grid, Typography, } from '@mui/material';
import CharacterCard from '../components/cards/CharacterCard';
import { InfoCard } from '../components/cards/InfoCard';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { DefaultIcon } from '../components/icons/DefaultIcon';
import theme from '../plugins/theme';


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
          <InfoCard
            title="Active characters"
            count={charNumber}
            icon={
              <DefaultIcon
                icon={<WaterDropIcon sx={{ color: theme.palette.primary.contrastText }} />}
              />
            }            
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            title="Active campaigns"
            count={campNumber}
            icon={
              <DefaultIcon
                icon={<WaterDropIcon sx={{ color: theme.palette.primary.contrastText }} />}
              />
            }            
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            title="Dice rolls today"
            count={rollNumber}
            icon={
              <DefaultIcon
                icon={<WaterDropIcon sx={{ color: theme.palette.primary.contrastText }} />}
              />
            }            
          />
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