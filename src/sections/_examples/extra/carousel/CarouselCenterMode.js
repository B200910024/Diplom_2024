import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Paper, Link, CardContent, Stack, Typography, styled, Card } from '@mui/material';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
// components
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
import TextMaxLine from '../../../../components/text-max-line';
import Carousel, { CarouselArrows } from '../../../../components/carousel';

// ----------------------------------------------------------------------

CarouselCenterMode.propTypes = {
  data: PropTypes.array,
};

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'left',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(5,5),
  // [theme.breakpoints.up('md')]: {
  //   boxShadow: 'none',
  // },
}));

export default function CarouselCenterMode({ data }) {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const carouselSettings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <CarouselArrows
        filled
        icon="noto:rightwards-hand"
        onNext={handleNext}
        onPrevious={handlePrev}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {data.map((item) => (
            <Box key={item.id} sx={{ p: 1 }}>
              <CarouselItem item={item} />
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  const theme = useTheme();

  const { image, title, description } = item;

  return (
    <StyledCard>
      <Stack gap={1}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              mt: 0,
              mb: 0,
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">{description}</Typography>
        </Stack>
      </Stack>
    </StyledCard>
    // <Paper
    //   sx={{
    //     borderRadius: 2,
    //     overflow: 'hidden',
    //     position: 'relative',
    //   }}
    // >

    //   <CardContent
    //     sx={{
    //       bottom: 0,
    //       zIndex: 9,
    //       width: '100%',
    //       textAlign: 'left',
    //       position: 'absolute',
    //       color: 'common.white',
    //       ...bgGradient({
    //         direction: 'to top',
    //         startColor: `${theme.palette.grey[900]} 25%`,
    //         endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
    //       }),
    //     }}
    //   >
    //     <TextMaxLine variant="h4" paragraph>
    //       {title}
    //     </TextMaxLine>

    //     <Link
    //       color="inherit"
    //       variant="overline"
    //       sx={{
    //         opacity: 0.72,
    //         alignItems: 'center',
    //         display: 'inline-flex',
    //         transition: theme.transitions.create('opacity'),
    //         '&:hover': { opacity: 1 },
    //       }}
    //     >
    //       learn More
    //       <Iconify icon="eva:arrow-forward-fill" width={16} sx={{ ml: 1 }} />
    //     </Link>
    //   </CardContent>
    // </Paper>
  );
}
