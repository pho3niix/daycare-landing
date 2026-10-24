'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 6, py: 4 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '10px',
              bgcolor: 'primary.main',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              fontSize: 11,
            }}
          >
            del Á
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Un lugar para crecer feliz.</Typography>
        </Box>
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          © 2026 Escuela Infantil del Ángel • Monterrey, N.L.
        </Typography>
      </Container>
    </Box>
  );
}
