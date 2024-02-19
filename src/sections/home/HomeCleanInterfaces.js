import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Rating, Button } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import _mock from '../../_mock';
import { CarouselCenterMode } from '../_examples/extra/carousel';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchLessonList } from '../../redux/slices/lesson';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(5, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: theme.shadows[5],
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    zIndex: -1,
    content: '""',
    position: 'absolute',
    top: '110%',
    left: '45%',
    width: '10%',
    height: '10%',
    backgroundColor: '#BDEAF1',
  },
}));

// ----------------------------------------------------------------------

export default function HomeCleanInterfaces() {
  const dispatch = useDispatch();
  const { lessonList } = useSelector((state) => state.lesson);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(fetchLessonList());
  }, [dispatch]);

  const _carouselsExample = lessonList.map((item) => ({
    id: item.id,
    title: item.lessonName,
    description: '1кр 25 багш',
  }));

  return (
    <StyledRoot>
      <Container maxWidth="xl">
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <StyledTypography variant="h3" sx={{ textAlign: 'center', zIndex: 1 }}>
              Санал болгох хичээлүүд
            </StyledTypography>
          </m.div>
        </Stack>

        <CarouselCenterMode data={_carouselsExample} />
      </Container>
    </StyledRoot>
  );
}
