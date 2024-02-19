import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link, Stack } from '@mui/material';

// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Logo from '../../components/logo';
import Label from '../../components/label';
// nav
import NavMobile from './nav/mobile';
import navConfig from './nav/config-navigation';
import NavDesktop from './nav/desktop';
// auth
import { useAuthContext } from '../../auth/useAuthContext';

// ----------------------------------------------------------------------

export default function Header() {
  const { isAuthenticated, logout } = useAuthContext();

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }} maxWidth="xl">
          <Logo />

          <Link
            // href={PATH_DOCS.changelog}
            // target="_blank"
            // rel="noopener"
            underline="none"
            sx={{ ml: 1 }}
          >
            <Label color="info"> Багшаа үнэлье </Label>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />

          {!isAuthenticated ? (
            <Button
              variant="contained"
              href={PATH_AUTH.login}
              sx={{
                backgroundColor: 'white',
                color: '#52BBD3',
                '&:hover': {
                  backgroundColor: 'none'
                },
              }}
            >
              Нэвтрэх
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => logout()}
              sx={{ backgroundColor: 'white', color: '#52BBD3' }}
            >
              Гарах
            </Button>
          )}

          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
