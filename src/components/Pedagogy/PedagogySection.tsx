'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

const blocks = [
  { icon: '✨', title: 'Curiosidad', text: 'Para explorar el mundo', bg: 'primary.main', color: '#fff' },
  { icon: '💙', title: 'Confianza', text: 'Para crecer seguro', bg: 'brand.main', color: '#fff' },
  { icon: '🌱', title: 'Autonomía', text: 'Para colaborar e intentar', bg: 'secondary.main', color: '#fff' },
  { icon: '🍴', title: 'Bienestar', text: 'Para su día a día', bg: 'honey.main', color: '#3D405B' },
];

const points = [
  'Grupos pequeños y atención cercana',
  'Planeaciones temáticas mensuales',
  'Comunicación constante con familias',
];

export default function PedagogySection() {
  return (
    <Box id="modelo" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 5, md: 8 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
            Nuestro modelo pedagógico
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 3 }}>
            Aprender no tiene que sentirse como{' '}
            <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
              una obligación.
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 17, mb: 3 }}>
            Creemos en una infancia con tiempo para jugar, experimentar y hacer preguntas. Nuestra propuesta combina
            estimulación temprana, inteligencias múltiples y acompañamiento socioemocional.
          </Typography>
          <Box sx={{ display: 'grid', gap: 1.5 }}>
            {points.map((p) => (
              <Box key={p} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: 'secondary.light',
                    color: 'secondary.dark',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon sx={{ fontSize: 16 }} />
                </Box>
                <Typography sx={{ fontWeight: 600 }}>{p}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
          {blocks.map((b) => (
            <Box
              key={b.title}
              sx={{
                bgcolor: b.bg,
                color: b.color,
                borderRadius: '24px',
                p: 3,
                minHeight: { xs: 130, md: 160 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ fontSize: 26 }}>{b.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ color: 'inherit' }}>
                  {b.title}
                </Typography>
                <Typography sx={{ fontSize: 14, opacity: 0.9, color: 'inherit' }}>{b.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
