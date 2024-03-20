import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import logo from '../../assets/logo.png'

const logoStyle = {
  width: '140px',
  height: 'auto',
}
const TopFooter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Box sx={{ ml: '-15px' }}>
            <img src={logo} style={logoStyle} alt='logo of sitemark' />
          </Box>
          <Typography variant='body2' fontWeight={600} gutterBottom>
            Newsletter
          </Typography>
          <Typography variant='body2' color='text.secondary' mb={2}>
            Subscribe to our newsletter for weekly updates and promotions.
          </Typography>
          <Stack direction='row' spacing={1} useFlexGap>
            <TextField
              id='outlined-basic'
              hiddenLabel
              size='small'
              variant='outlined'
              fullWidth
              aria-label='Enter your email address'
              placeholder='Your email address'
              inputProps={{
                autoComplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant='contained' color='primary' sx={{ flexShrink: 0 }}>
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant='body2' fontWeight={600}>
          Product
        </Typography>
        <Link color='text.secondary' href='#'>
          Features
        </Link>
        <Link color='text.secondary' href='#'>
          Testimonials
        </Link>
        <Link color='text.secondary' href='#'>
          Highlights
        </Link>
        <Link color='text.secondary' href='#'>
          Pricing
        </Link>
        <Link color='text.secondary' href='#'>
          FAQs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant='body2' fontWeight={600}>
          Company
        </Typography>
        <Link color='text.secondary' href='#'>
          About us
        </Link>
        <Link color='text.secondary' href='#'>
          Careers
        </Link>
        <Link color='text.secondary' href='#'>
          Press
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant='body2' fontWeight={600}>
          Legal
        </Typography>
        <Link color='text.secondary' href='#'>
          Terms
        </Link>
        <Link color='text.secondary' href='#'>
          Privacy
        </Link>
        <Link color='text.secondary' href='#'>
          Contact
        </Link>
      </Box>
    </Box>
  )
}

export default TopFooter
