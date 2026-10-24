import { createTheme } from '@mui/material/styles';

// 1. Ampliación de tipos de TypeScript para paletas personalizadas
declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary'];
    honey: Palette['primary'];
    slate: Palette['primary'];
  }
  interface PaletteOptions {
    brand?: PaletteOptions['primary'];
    honey?: PaletteOptions['primary'];
    slate?: PaletteOptions['primary'];
  }
}

// 2. Permitir el uso de colores personalizados en componentes de MUI
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    brand: true;
    honey: true;
    slate: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    brand: true;
    honey: true;
    slate: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',

    // Azul marino (Identidad / Marca)
    brand: {
      main: '#1D3354',
      light: '#364D71',
      dark: '#0F1D30',
      contrastText: '#FFFFFF',
    },

    // Terracota (Acciones principales / CTAs)
    primary: {
      main: '#E07A5F',
      light: '#E9957F',
      dark: '#C9654C',
      contrastText: '#FFFFFF',
    },

    // Verde Salvia (Éxito / Badges positivos)
    secondary: {
      main: '#81B29A',
      light: '#A7C9B5',
      dark: '#5D9278',
      contrastText: '#FFFFFF',
    },

    // Amarillo Miel / Melocotón
    honey: {
      main: '#F2CC89',
      light: '#F6DAA4',
      dark: '#D3A762',
      contrastText: '#3D405B',
    },

    // Slate Oscuro
    slate: {
      main: '#3D405B',
      light: '#535676',
      dark: '#2B2D42',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#F4F1DE', // Crema cálido general
      paper: '#FFFCF5',   // Superficie de tarjetas y contenedores
    },

    text: {
      primary: '#3D405B',
      secondary: '#686A7D',
      disabled: '#A0A2B1',
    },

    success: {
      main: '#81B29A',
      contrastText: '#FFFFFF',
    },

    warning: {
      main: '#F2CC89',
      contrastText: '#3D405B',
    },

    error: {
      main: '#C95D50',
      contrastText: '#FFFFFF',
    },

    divider: 'rgba(61, 64, 91, 0.12)',
  },

  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      color: '#3D405B',
    },

    h2: {
      fontWeight: 750,
      letterSpacing: '-0.035em',
      lineHeight: 1.18,
      color: '#3D405B',
    },

    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.25,
      color: '#3D405B',
    },

    h4: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: '#3D405B',
    },

    h5: {
      fontWeight: 700,
      color: '#3D405B',
    },

    h6: {
      fontWeight: 700,
      color: '#3D405B',
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0',
    },

    body1: {
      lineHeight: 1.7,
      color: '#3D405B',
    },

    body2: {
      lineHeight: 1.6,
      color: '#686A7D',
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },

        body: {
          backgroundColor: '#F4F1DE',
          color: '#3D405B',
          margin: 0,
        },

        '*::selection': {
          backgroundColor: '#E07A5F',
          color: '#FFFFFF',
        },

        a: {
          color: '#3D405B',
          textDecoration: 'none',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',

          '&:hover': {
            boxShadow: '0 6px 18px rgba(61, 64, 91, 0.12)',
            transform: 'translateY(-1px)',
          },

          // Variantes contenidas y alineadas a la paleta
          '&.MuiButton-containedPrimary': {
            '&:hover': {
              backgroundColor: '#C9654C',
            },
          },

          '&.MuiButton-outlinedPrimary': {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              backgroundColor: 'rgba(224, 122, 95, 0.06)',
            },
          },
        },
      },

      // Variantes personalizadas para botones con color "brand"
      variants: [
        {
          props: { variant: 'contained', color: 'brand' },
          style: {
            backgroundColor: '#1D3354',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#0F1D30',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'brand' },
          style: {
            color: '#1D3354',
            borderColor: '#1D3354',
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              borderColor: '#0F1D30',
              backgroundColor: 'rgba(29, 51, 84, 0.06)',
            },
          },
        },
        {
          props: { variant: 'text', color: 'brand' },
          style: {
            color: '#1D3354',
            '&:hover': {
              backgroundColor: 'rgba(29, 51, 84, 0.06)',
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(61, 64, 91, 0.08)',
          backgroundColor: '#FFFCF5',
          backgroundImage: 'none',
          boxShadow: '0 4px 16px rgba(61, 64, 91, 0.04)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },

        rounded: {
          borderRadius: 16,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#FFFCF5',

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(61, 64, 91, 0.18)',
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E07A5F',
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E07A5F',
            borderWidth: 2,
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '16px !important',
          border: '1px solid rgba(61, 64, 91, 0.10)',
          backgroundColor: '#FFFCF5',
          boxShadow: 'none',
          marginBottom: 12,
          overflow: 'hidden',

          '&::before': {
            display: 'none',
          },

          '&.Mui-expanded': {
            margin: '0 0 12px 0',
            borderColor: 'rgba(224, 122, 95, 0.3)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;