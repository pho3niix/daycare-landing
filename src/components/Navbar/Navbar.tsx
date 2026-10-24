'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Modelo pedagógico', href: '#modelo' },
  { label: 'Nutrición', href: '#nutricion' },
  { label: 'Precios y horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'brand.main',
          color: '#fff',
          textAlign: 'center',
          py: 1,
          px: 2,
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        ✨ Inscripciones abiertas • Cupo limitado por grupo
      </Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,252,245,0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, gap: 3 }}>
            <Box component="a" href="#" aria-label="Inicio" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '12px',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 800,
                  fontSize: 15,
                  flexShrink: 0,
                }}
              >
                del Á
              </Box>
              <Typography
                sx={{ fontWeight: 700, lineHeight: 1.15, color: 'brand.main', display: { xs: 'none', sm: 'block' } }}
              >
                Escuela Infantil
                <br />
                del Ángel
              </Typography>
            </Box>
            <Box component="nav" sx={{ display: { xs: 'none', lg: 'flex' }, gap: 3, ml: 2, flexGrow: 1 }}>
              {links.map((l) => (
                <Box
                  key={l.href}
                  component="a"
                  href={l.href}
                  sx={{ fontSize: 15, fontWeight: 500, '&:hover': { color: 'primary.main' } }}
                >
                  {l.label}
                </Box>
              ))}
            </Box>
            <Box sx={{ flexGrow: { xs: 1, lg: 0 } }} />
            <Button
              variant="contained"
              color="primary"
              href="#contacto"
              sx={{ borderRadius: 99, px: { xs: 2, sm: 3 }, whiteSpace: 'nowrap' }}
            >
              Agenda tu visita →
            </Button>
            <IconButton aria-label="Abrir menú" onClick={() => setOpen(true)} sx={{ display: { lg: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260, pt: 3 }}>
          {links.map((l) => (
            <ListItemButton key={l.href} component="a" href={l.href} onClick={() => setOpen(false)}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
