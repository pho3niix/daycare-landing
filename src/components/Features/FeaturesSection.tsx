'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const features = [
  {
    icon: '🌾',
    title: 'Desarrollo Integral',
    text: 'Estimulamos lenguaje, motricidad, arte y desarrollo socioemocional respetando el ritmo de cada pequeño.',
    bg: 'honey.light',
  },
  {
    icon: '🍴',
    title: 'Nutrición consciente',
    text: 'Menús balanceados y deliciosos que acompañan su crecimiento y crean hábitos saludables.',
    bg: 'secondary.light',
  },
  {
    icon: '🛡️',
    title: 'Seguridad y confianza',
    text: 'Personal capacitado, espacios adaptados y protocolos pensados para tu tranquilidad.',
    bg: '#D6DEEA',
  },
  {
    icon: '❤️',
    title: 'Aprender Jugando',
    text: 'Metodología activa que convierte el descubrimiento en una aventura diaria.',
    bg: 'primary.light',
  },
];

export default function FeaturesSection() {
  return (
    <Box id="nutricion" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 2, md: 8 },
            alignItems: 'end',
            mb: 6,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
              Lo que nos hace especiales
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
              Un segundo hogar,{' '}
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                un primer gran paso.
              </Box>
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontSize: 16, maxWidth: 420 }}>
            Cada día aquí está diseñado para que tu hijo se sienta seguro, querido y emocionado por descubrir algo
            nuevo.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {features.map((f) => (
            <Card key={f.title} sx={{ p: 3, borderRadius: '24px' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '14px',
                  bgcolor: f.bg,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 22,
                  mb: 2.5,
                }}
              >
                {f.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {f.title}
              </Typography>
              <Typography variant="body2">{f.text}</Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
