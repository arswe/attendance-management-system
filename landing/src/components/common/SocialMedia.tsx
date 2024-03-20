import FacebookIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/X'
import { IconButton, Stack } from '@mui/material'

const SocialMedia = () => {
  return (
    <Stack
      direction='row'
      justifyContent='left'
      spacing={1}
      useFlexGap
      sx={{
        color: 'text.secondary',
      }}
    >
      <IconButton
        color='inherit'
        href='https://github.com/arswe'
        aria-label='GitHub'
        sx={{ alignSelf: 'center' }}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        color='inherit'
        href='https://twitter.com/arswe'
        aria-label='X'
        sx={{ alignSelf: 'center' }}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        color='inherit'
        href='https://www.linkedin.com/company/arswe/'
        aria-label='LinkedIn'
        sx={{ alignSelf: 'center' }}
      >
        <LinkedInIcon />
      </IconButton>
    </Stack>
  )
}

export default SocialMedia
