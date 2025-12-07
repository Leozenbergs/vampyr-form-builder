import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CharacterCard from '../../components/cards/CharacterCard';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type CharacterCardProps = {
  item: {
    name: string;
    description: string;
  }
}

function Characters() {
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
            <Button
              variant="contained"
              sx={{ color: "#fff" }}
              aria-label="add"
              onClick={() => navigate("/characters/create")}
            >
              <Add />
              <Typography variant="body2" noWrap component="div" sx={{ ml: 1 }}>Create character</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {JSON.parse(currentChars).map((item: CharacterCardProps['item'], index: number) =>
          <Grid size={3} key={index}>
            <CharacterCard item={item} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Characters;