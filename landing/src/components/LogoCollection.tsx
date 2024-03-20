import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/system'
import { darkLogos } from './shared/darkLogos'
import { whiteLogos } from './shared/whiteLogos'

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
}

export default function LogoCollection() {
  const theme = useTheme()
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos

  return (
    <Box id='logoCollection' sx={{ py: 4 }}>
      <Typography
        component='p'
        variant='subtitle2'
        align='center'
        color='text.secondary'
      >
        Trusted by the best companies
      </Typography>
      <Grid container justifyContent='center' sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
