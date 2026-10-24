'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const stages = [
  {
    icon: '🎨',
    age: '0 a 18 meses',
    title: 'Lactantes',
    text: 'Cuidado amoroso, estimulación sensorial y acompañamiento cercano para sus primeros descubrimientos.',
  },
  {
    icon: '🧩',
    age: '18 meses a 3 años',
    title: 'Maternal',
    text: 'Autonomía, lenguaje y movimiento en un entorno que celebra cada logro.',
  },
  {
    icon: '📘',
    age: '3 a 5 años',
    title: 'Preescolar temprano',
    text: 'Curiosidad, convivencia y aprendizajes significativos para prepararlos para el siguiente paso.',
  },
];

export default function StagesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'rgba(129,178,154,0.15)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
            Etapas para cada descubrimiento
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
            Lugar para cada{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              pequeño
            </Box>{' '}
            gran logro.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {stages.map((s) => (
            <Card key={s.title} sx={{ p: 3.5, borderRadius: '24px', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ fontSize: 28, mb: 2 }}>{s.icon}</Box>
              <Typography
                variant="overline"
                sx={{ fontWeight: 700, letterSpacing: '0.1em', color: 'text.secondary', lineHeight: 1.5 }}
              >
                {s.age}
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {s.title}
              </Typography>
              <Typography variant="body2" sx={{ flexGrow: 1, mb: 2 }}>
                {s.text}
              </Typography>
              <Button href="#contacto" color="brand" sx={{ alignSelf: 'flex-start', px: 0 }}>
                Conocer esta etapa ›
              </Button>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
