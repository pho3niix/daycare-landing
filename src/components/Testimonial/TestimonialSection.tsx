'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function TestimonialSection() {
  return (
    <Box component="section" sx={{ bgcolor: 'brand.main', color: '#fff', py: { xs: 6, md: 9 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.4fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'honey.main', fontWeight: 700, letterSpacing: '0.12em' }}>
            Lo que dicen nuestras familias
          </Typography>
          <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: 30, md: 38 } }}>
            La tranquilidad de dejarlo en{' '}
            <Box component="span" sx={{ color: 'honey.main' }}>
              las mejores manos.
            </Box>
          </Typography>
        </Box>
        <Box sx={{ borderLeft: '3px solid', borderColor: 'honey.main', pl: { xs: 2.5, md: 4 } }}>
          <Typography
            component="blockquote"
            sx={{ m: 0, fontSize: { xs: 18, md: 22 }, fontStyle: 'italic', lineHeight: 1.6, color: '#fff' }}
          >
            “Desde el primer día sentimos que nuestra hija estaba en un lugar especial. La atención, el cariño y la
            comunicación con nosotros han sido increíbles.”
          </Typography>
          <Typography sx={{ fontWeight: 700, mt: 3, color: '#fff' }}>Carolina M.</Typography>
          <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Mamá de Sofía • Maternal</Typography>
        </Box>
      </Container>
    </Box>
  );
}
