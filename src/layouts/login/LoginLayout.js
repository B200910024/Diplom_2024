import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, styled, Grid } from '@mui/material';
// components
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';

// ----------------------------------------------------------------------

LoginLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

const StyledEllipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '80%',
  height: '75%',
  top: '50%',
  left: '50%',
  borderRadius: '10%',
  transform: 'translate(-50%, -50%) rotate(-10deg)',
  backgroundColor: '#51BAD2',
  // zIndex: -2,
}));

const StyledBack = styled('div')(({ theme }) => ({
  position: 'absolute',
  background: `linear-gradient(to right, #36828E 0%, #36828E 40%, #FFFFFF 40%, #FFFFFF 100%)`,
  borderRadius: '10%',
  width: '80%',
  height: '85%',
  left: '50%',
  top: '50%',
  // transform: 'translateX(-50%) translateY(-50%)',
  transform: 'translate(-50%, -50%)', // Center the StyledBack

  // zIndex: -1,
}));

export default function LoginLayout({ children, illustration, title }) {
  return (
    <StyledRoot sx={{ backgroundColor: '#E5D7A6' }}>
      <StyledEllipse />
      {/* <Logo
          sx={{
            zIndex: 9,
            position: 'absolute',
            mt: { xs: 1.5, md: 5 },
            ml: { xs: 2, md: 5 },
          }}
        /> */}
      <StyledBack>
        {/* <Stack
          sx={{
            backgroundColor: '#36828E',
            height: '85%',
            borderTopLeftRadius: '10%',
            borderBottomLeftRadius: '10%',
          }}
        >
          Left Section
        </Stack> */}
        {/* <Stack sx={{ backgroundColor: 'red', height: '100%' }}>Right Section</Stack> */}
        <StyledContent>
          <Stack sx={{ width: 1 }}> {children} </Stack>
        </StyledContent>
      </StyledBack>

      {/* <StyledSection>
          <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
            {title || 'Hi, Welcome back'}
          </Typography>

          <Image
            disabledEffect
            visibleByDefault
            alt="auth"
            src={illustration || '/assets/illustrations/illustration_dashboard.png'}
            sx={{ maxWidth: 720 }}
          />

          <StyledSectionBg />
        </StyledSection> */}
    </StyledRoot>
  );
}
