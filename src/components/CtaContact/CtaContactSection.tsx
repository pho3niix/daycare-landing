'use client';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const stages = ['Lactantes (0 a 18 meses)', 'Maternal (18 meses a 3 años)', 'Preescolar temprano (3 a 5 años)'];

export default function CtaContactSection() {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <Box id="contacto" component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: 'brand.main',
            color: '#fff',
            borderRadius: { xs: '24px', md: '32px' },
            p: { xs: 3, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: 'honey.main', fontWeight: 700, letterSpacing: '0.12em' }}>
              El paso para conocernos
            </Typography>
            <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: 32, md: 42 }, mb: 2 }}>
              El primer paso comienza con{' '}
              <Box component="span" sx={{ color: 'honey.main' }}>
                una visita.
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
              Ven a conocer nuestro espacio, conocer a nuestro equipo y resolver todas tus dudas. Será un gusto
              recibirte.
            </Typography>
            <Box sx={{ display: 'grid', gap: 1 }}>
              <Typography sx={{ color: '#fff' }}>📞 811 123 4567</Typography>
              <Typography sx={{ color: '#fff', wordBreak: 'break-all' }}>✉️ direccion.delangel@gmail.com</Typography>
            </Box>
          </Box>

          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: { xs: 3, md: 4 }, borderRadius: '24px', display: 'grid', gap: 2 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">Agenda tu visita</Typography>
              <Typography variant="body2">Te contactaremos para confirmar disponibilidad.</Typography>
            </Box>
            {sent && <Alert severity="success">¡Gracias! Te contactaremos muy pronto.</Alert>}
            <TextField name="nombre" placeholder="Tu nombre" required fullWidth />
            <TextField name="telefono" type="tel" placeholder="Teléfono" required fullWidth />
            <TextField
              select
              name="etapa"
              defaultValue=""
              required
              fullWidth
              slotProps={{ select: { displayEmpty: true } }}
            >
              <MenuItem value="" disabled>
                Etapa de interés
              </MenuItem>
              {stages.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
              Quiero conocerlos →
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
