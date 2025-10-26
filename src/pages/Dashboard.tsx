import { Box, Container, Fab, Grid, Stack, Tooltip, Typography } from '@mui/material';
import CharacterCard from '../components/cards/CharacterCard';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type CharacterCardProps = {
  item: {
    name: string;
    description: string;
  }
}

function Dashboard() {
  const navigate = useNavigate()
  const currentChars = localStorage.getItem("characters") ?? "[]"

  return (
    <Container
      sx={{
        minWidth: '80vw',
        minHeight: "70vh"
      }}
    >
      <Grid container spacing={2}>
        <Grid size={8} />
        <Grid size={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row', // or 'column', 'row-reverse', 'column-reverse'
              justifyContent: 'end', // or 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'
              alignItems: 'center', // or 'flex-start', 'flex-end', 'stretch', 'baseline'
              gap: 2, // Spacing between items
            }}
          >
            <Typography variant="h4">Click to create</Typography>
            <Tooltip title="Create a new character">
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => navigate("/create")}
              >
                <Add />
              </Fab>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          { JSON.parse(currentChars).map((item: CharacterCardProps['item'], index: number) => 
            <CharacterCard key={index} item={item} />
          ) }
        </Stack>
      </Stack>
    </Container>
  );
}

export default Dashboard;