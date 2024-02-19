// next
import Head from 'next/head';
import { useEffect } from 'react';
// @mui
import { Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeForDesigner,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';
import { useDispatch, useSelector } from '../redux/store';
import { fetchRatingList } from '../redux/slices/rating';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useDispatch();

  const { ratingList } = useSelector((state) => state.rating);

  useEffect(() => {
    dispatch(fetchRatingList());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title> Багшаа үнэлье | Нүүр хуудас</title>
      </Head>

      <ScrollProgress />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal ratingList={ratingList} />

        {/* <HomeHugePackElements />

        <HomeForDesigner />

        <HomeDarkMode /> */}

        <HomeColorPresets />

        <HomeCleanInterfaces />

        {/* <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement /> */}
      </Box>
    </>
  );
}
