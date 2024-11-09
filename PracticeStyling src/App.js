import { createGlobalStyle } from 'styled-components';
import { Container, Grid, Box } from '@mui/material';
import CreatedTable from './Components/Table';
import CardComponent from './Components/CardCompontent';
import TextComponent from './Components/TextComponent';
import SelectComponent from './Components/SelectComponent';
import ButtonComponent from './Components/ButtonComponent';
import Photo1 from './interestingpicture1.png';
import Photo2 from './interestingpicture2.png';

function App() {

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e0e0e0;
  }
`;

  function createData(equipment, takenby, subject) {
    return { equipment, takenby, subject };
  }

  const rows = [
    createData('Canon EOS 6D Mark II', 'Joe', 'Tree'),
    createData('Canon EOS 6D Mark II', 'Joe', 'House'),
    createData('Pentax K-70', 'Mark', 'Old Lady'),
  ];

  const names = [
    { value: 1, label: 'Joe' },
    { value: 2, label: 'Mark' },
  ];

  const photos = [
    { number: 1, src: Photo1 },
    { number: 2, src: Photo2 },
  ];

  return (
    <div>
      <GlobalStyle />
      <Container maxWidth='lg' sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CreatedTable rows={rows} />

            <Box
              component="form"
              sx={{
                mt: 2,
                p: 2,
                border: '1px solid #ddd',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                backgroundColor: '#FFFFFF'
              }}
            >
              <TextComponent label="Equipment" />
              <SelectComponent names={names} label="Taken by" />
              <TextComponent label="Subject" />

              <Box sx={{ display: 'flex', gap: 2 }}>
                <ButtonComponent label="ADD NEW IMAGE" color="primary" />
                <ButtonComponent label="CANCEL" color="error" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {photos.map((item) => (
              <CardComponent key={item.number} number={item.number} src={item.src} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
