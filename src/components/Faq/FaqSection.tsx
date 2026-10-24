'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    q: '¿Qué necesito para inscribir a mi hijo?',
    a: 'Acta de nacimiento, cartilla de vacunación, comprobante de domicilio e identificación de los tutores. Te acompañamos en todo el proceso durante tu visita.',
  },
  {
    q: '¿Ofrecen alimentos durante la jornada?',
    a: 'Sí. Contamos con menús balanceados y adaptados a cada etapa, que acompañan su crecimiento y fomentan hábitos saludables.',
  },
  {
    q: '¿Qué horarios manejan?',
    a: 'Media jornada (4 horas), jornada completa (8 horas) y horario extendido flexible. Pregunta por disponibilidad.',
  },
  {
    q: '¿Puedo conocer las instalaciones?',
    a: '¡Por supuesto! Agenda una visita presencial y con gusto te mostraremos nuestro espacio y te presentaremos a nuestro equipo.',
  },
];

export default function FaqSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: '0.12em' }}>
            Preguntas frecuentes
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 } }}>
            Todo lo que necesitas{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              saber.
            </Box>
          </Typography>
        </Box>
        {faqs.map((f) => (
          <Accordion key={f.q} disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 0.5 }}>
              <Typography sx={{ fontWeight: 700 }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Typography variant="body2">{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
