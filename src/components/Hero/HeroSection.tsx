'use client';

import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

export default function HeroSection() {
  return (
    <Box id="nosotros" component="section" sx={{ py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
            Un lugar para crecer feliz
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 40, sm: 52, lg: 60 }, mt: 1, mb: 3 }}>
            El mejor inicio para el{' '}
            <Box component="span" sx={{ color: 'primary.main', borderBottom: '4px solid', borderColor: 'honey.main' }}>
              futuro
            </Box>{' '}
            de tu hijo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18, maxWidth: 540, mb: 4, color: 'text.secondary' }}>
            Un espacio seguro, lleno de amor y aprendizaje temprano. Estimulamos inteligencias múltiples, cuidamos su
            nutrición y guiamos su desarrollo desde sus primeros meses de vida.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            <Button variant="contained" color="primary" size="large" href="#contacto" sx={{ borderRadius: 99 }}>
              Agendar visita presencial ›
            </Button>
            <Button variant="outlined" color="brand" size="large" href="#nutricion" sx={{ borderRadius: 99 }}>
              Conocer servicios
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ maxWidth: 320 }}>
              Una dirección pedagógica que acompaña a cada familia con corazón
            </Typography>
          </Box>
        </Box>

        <Box sx={{ position: 'relative', pb: 4 }}>
          <Box sx={{ bgcolor: 'honey.light', p: { xs: 1.5, md: 2.5 }, borderRadius: { xs: '28px', md: '40px' } }}>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: { xs: '18px', md: '28px' },
                overflow: 'hidden',
              }}
            >
              <Image
                src="/index-section.jpg"
                alt="Niños pintando en el aula"
                fill
                priority
                sizes="(min-width: 900px) 480px, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 12, md: -24 },
              bottom: 0,
              bgcolor: 'background.paper',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(61,64,91,0.15)',
              px: 2.5,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.light', width: 36, height: 36 }}>
              <CheckIcon fontSize="small" />
            </Avatar>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Crecemos juntos</Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                Comunidad y desarrollo
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
