'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const plans = [
  { name: 'Media jornada', title: '4 horas', text: 'Ideal para comenzar', featured: false },
  { name: 'Jornada completa', title: '8 horas', text: 'Nuestro programa más completo', featured: true },
  { name: 'Extendida', title: 'Horario flexible', text: 'Para familias que requieren apoyo extra', featured: false },
];

export default function PricingSection() {
  return (
    <Box id="horarios" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1.4fr' },
          gap: { xs: 5, lg: 6 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
            Horarios que se adaptan a ti
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 2 }}>
            Tu rutina,{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              nuestro apoyo.
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 16, mb: 3 }}>
            Sabemos que cada familia tiene necesidades diferentes. Elige la jornada que mejor acompañe tu día.
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              bgcolor: 'honey.light',
              px: 2.5,
              py: 1.5,
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            ⚡ Pregunta por disponibilidad y horarios extendidos
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
          {plans.map((p) => (
            <Card
              key={p.name}
              sx={{
                p: 3,
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                ...(p.featured && {
                  bgcolor: 'brand.main',
                  borderColor: 'brand.main',
                  color: '#fff',
                  boxShadow: '0 16px 40px rgba(29,51,84,0.25)',
                }),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: 14, color: p.featured ? 'rgba(255,255,255,0.7)' : 'text.secondary' }}
                >
                  {p.name}
                </Typography>
                {p.featured && <Chip label="Popular" size="small" color="honey" />}
              </Box>
              <Typography variant="h4" sx={{ color: 'inherit', mb: 0.5, fontSize: { xs: 26, md: 28 } }}>
                {p.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ flexGrow: 1, mb: 3, color: p.featured ? 'rgba(255,255,255,0.75)' : 'text.secondary' }}
              >
                {p.text}
              </Typography>
              <Button
                href="#contacto"
                variant={p.featured ? 'contained' : 'text'}
                color={p.featured ? 'primary' : 'brand'}
                sx={{ alignSelf: 'flex-start', ...(!p.featured && { px: 0 }) }}
              >
                Solicitar información ›
              </Button>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
