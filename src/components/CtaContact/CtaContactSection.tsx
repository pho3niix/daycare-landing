'use client';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const stages = ['Lactantes (0 a 18 meses)', 'Maternal (18 meses a 3 años)', 'Preescolar temprano (3 a 5 años)'];

export default function CtaContactSection() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phone, setPhone] = React.useState('');

  // Helper para dar formato a la máscara de teléfono (10 dígitos: 81 8901 1386)
  const formatPhoneNumber = (value: string) => {
    // Extraer solo caracteres numéricos
    const numbersOnly = value.replace(/\D/g, '');

    // Limitar a 10 dígitos max (estándar de México)
    const truncated = numbersOnly.slice(0, 10);

    // Formatear: XX XXXX XXXX
    if (truncated.length <= 2) {
      return truncated;
    }
    if (truncated.length <= 6) {
      return `${truncated.slice(0, 2)} ${truncated.slice(2)}`;
    }
    return `${truncated.slice(0, 2)} ${truncated.slice(2, 6)} ${truncated.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: phone, // Teléfono con o sin espacios según la máscara
          stage: data.get('stage'),
        }),
      });

      if (!res.ok) throw new Error('send failed');

      form.reset();
      setPhone(''); // Limpiar el estado controlado del teléfono
      setStatus('success');
    } catch {
      setStatus('error');
    }
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
              <Typography sx={{ color: '#fff' }}>📞 81 89011386</Typography>
              <Typography sx={{ color: '#fff', wordBreak: 'break-all' }}>✉️ dulces.nombres@hotmail.com</Typography>
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
            {status === 'success' && <Alert severity="success">¡Gracias! Te contactaremos muy pronto.</Alert>}
            {status === 'error' && (
              <Alert severity="error">No pudimos enviar tu solicitud. Intenta de nuevo o contáctanos por teléfono.</Alert>
            )}
            <TextField name="name" placeholder="Tu nombre" required fullWidth />

            {/* Input de teléfono con máscara de 10 dígitos */}
            <TextField
              name="phone"
              type="tel"
              placeholder="Teléfono (ej. 81 8901 1386)"
              value={phone}
              onChange={handlePhoneChange}
              slotProps={{ htmlInput: { maxLength: 12 } }} // Limite visual con espacios
              required
              fullWidth
            />

            <TextField
              select
              name="stage"
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={status === 'loading'}
              startIcon={status === 'loading' ? <CircularProgress size={18} color="inherit" /> : null}
            >
              {status === 'loading' ? 'Enviando...' : 'Quiero conocerlos →'}
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}