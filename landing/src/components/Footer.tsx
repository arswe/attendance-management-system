import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Copyright } from './common/Copyright'
import SocialMedia from './common/SocialMedia'
import TopFooter from './common/TopFooter'

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <TopFooter />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color='text.secondary' href='#'>
            Privacy Policy
          </Link>
          <Typography display='inline' sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color='text.secondary' href='#'>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <SocialMedia />
      </Box>
    </Container>
  )
}
