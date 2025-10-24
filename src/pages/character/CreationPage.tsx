import { Container } from '@mui/material';
import CharacterSheetForm from '../../views/CreationView';

function CreationPage() {
  return (
    <Container
      sx={{
        minWidth: '80vw',
        minHeight: "70vh"
      }}
    >
      <CharacterSheetForm />
    </Container>
  );
}

export default CreationPage
