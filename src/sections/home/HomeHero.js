import PropTypes from 'prop-types';
import { m, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Grid,
  Rating,
  Paper,
  IconButton,
  InputBase,
  Divider,
  Card,
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { textGradient, bgGradient } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// theme
import { secondaryFont } from '../../theme/typography';
// components
import Iconify from '../../components/iconify';
import { MotionContainer, varFade } from '../../components/animate';
import { CustomAvatar } from '../../components/custom-avatar';
import Label from '../../components/label';
// sections
import SearchDialog from './action/SearchDialog';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fffff',
  // ...bgGradient({
  //   color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
  //   imgUrl: '/assets/background/overlay_2.jpg',
  // }),
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    position: 'fixed',
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(15, 0),
  height: '100%',
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  fontFamily: secondaryFont.style.fontFamily,
  fontSize: `${64 / 16}rem`,
  textAlign: 'center',
  lineHeight: 1,
  padding: 0,
  marginTop: 8,
  marginBottom: 24,
  letterSpacing: 8,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 480,
  height: 480,
  top: -340,
  right: -80,
  borderRadius: '15%',
  transform: 'rotate(-10deg)',
  // filter: 'blur(100px)',
  // WebkitFilter: 'blur(100px)',
  // backgroundColor: alpha(theme.palette.primary.darker, 0.12),
  backgroundColor: '#52BBD3',
  zIndex: 1,
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  // height: 400,
  width: '100%',
  height: 800,
  top: -200,
  // bottom: -200,
  // left: '10%',
  // right: '10%',
  borderBottomLeftRadius: '10%',
  // borderRadius: '10%',
  transform: 'rotate(-10deg)',
  // filter: 'blur(100px)',
  // WebkitFilter: 'blur(100px)',
  // backgroundColor: alpha(theme.palette.primary.darker, 0.08),
  backgroundColor: '#EDFAFB',
  zIndex: -1,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    zIndex: -1,
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '95%',
    height: '50%',
    backgroundColor: '#FBEBB5',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  textAlign: 'left',
  height: 130,
  width: '100%',
  padding: theme.spacing(4, 4),
  [theme.breakpoints.up('md')]: {
    boxShadow: theme.shadows[5], // Adjust the shadow level as needed
  },
}));
// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'md');

  const { scrollYProgress } = useScroll();

  const [hide, setHide] = useState(false);

  useEffect(
    () =>
      scrollYProgress.on('change', (scrollHeight) => {
        if (scrollHeight > 0.8) {
          setHide(true);
        } else {
          setHide(false);
        }
      }),
    [scrollYProgress]
  );

  return (
    <>
      <StyledRoot sx={{ ...(hide && { opacity: 0 }) }}>
        <Container component={MotionContainer} sx={{ height: 1 }} maxWidth="xl">
          <Grid container spacing={10} sx={{ height: 1 }}>
            <Grid item xs={12} md={6} sx={{ height: 1 }}>
              <Description />
            </Grid>

            {isDesktop && (
              <Grid item xs={12} md={6}>
                <Content />
              </Grid>
            )}
          </Grid>
        </Container>
        {isDesktop && <StyledEllipseTop />}
        <StyledEllipseBottom />
      </StyledRoot>

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}

// ----------------------------------------------------------------------

SearchBox.propTypes = {
  onSearchClick: PropTypes.func,
};

function SearchBox({ onSearchClick }) {
  return (
    <Paper
      component="form"
      sx={{ p: '6px 10px', display: 'flex', alignItems: 'center', width: 400 }}
      onClick={onSearchClick}
    >
      <InputBase sx={{ ml: 1, flex: 1, fontSize: 18 }} placeholder="Багш / Хичээлийн нэрээр хайх" />
      <Iconify icon="material-symbols:search" />
    </Paper>
  );
}

function Description() {
  const [actionType, setActionType] = useState('');
  const handleSearchClick = () => {
    setActionType('create');
  };
  return (
    <>
      <StyledDescription>
        <m.div variants={varFade().in}>
          <Stack gap={1}>
            <StyledTypography variant="h2" sx={{ textAlign: 'left', zIndex: 1 }}>
              Багшаа үнэлье
            </StyledTypography>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              Багш нараа шударга ёс зүйтэйгээр үнэлцгээе!
            </Typography>
            <SearchBox onSearchClick={() => handleSearchClick()} />
          </Stack>
        </m.div>
      </StyledDescription>
      {actionType === 'create' && (
        <SearchDialog
          actionType={actionType}
          changeDialogStatus={(e) => {
            setActionType(e);
          }}
        />
      )}
    </>
  );
}

// ----------------------------------------------------------------------
function StyledReview() {
  return (
    <StyledCard>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" sx={{fontSize: 12, mt: 0, mb: 0 }}>
          Саранхүү Бат{' '}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} variant="body2">
          done
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            maxWidth: '300px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3, // Display only the first 3 lines
            textOverflow: 'ellipsis',
          }}
        >
          Миний хамгийн дуртай багш{' '}
        </Typography>

        <Rating name="read-only" value={4} readOnly sx={{ justifyContent: 'flex-end' }} />
      </Stack>
    </StyledCard>
  );
}
function Content() {
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      sx={{
        position: 'absolute',
        mt: `${HEADER.H_MAIN_DESKTOP + 100}px`,
      }}
    >
      <Stack 
        sx={{ width: 500, justifyContent: 'space-between', flexDirection: 'row', position: 'absolute'}}>
        <Stack component={m.div} variants={varFade().in} sx={{ position: 'static' }}>
          <CustomAvatar
            src="/assets/images/home/user.jpg"
            name="jjj"
            sx={{ left: -120 , width: 125, height: 125, position: 'absolute'}}
          />
          <Label
            sx={{
              backgroundColor: 'white',
              fontSize: 18,
              position: 'absolute',
              mt: 11,
              left: -160,
              p: 2,
              fontWeight: 2,
            }}
          >
            М.Тэмүүжин
          </Label>
          <StyledReview />
        </Stack>


      </Stack>
      <Stack
          sx={{
            flexDirection: 'row',
            width: 400,
            justifyContent: 'space-between',
            mt: 20,
          }}
          gap={3}
        >
          <StyledReview />
          <Stack component={m.div} variants={varFade().in} sx={{ position: 'relative' }}>
            <CustomAvatar
              src="/assets/images/home/user.jpg"
              name="jjj"
              sx={{ width: 125, height: 125 }}
            />
            <Label
              sx={{
                backgroundColor: 'white',
                fontSize: 18,
                position: 'absolute',
                mt: 11,
                left: 50,
                p: 2,
                fontWeight: 2,
              }}
            >
              Б.Өлзиймаа
            </Label>
          </Stack>
        </Stack>
    </Stack>
  );
}
