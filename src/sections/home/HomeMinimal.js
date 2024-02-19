import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Rating } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchRatingList } from '../../redux/slices/rating';

// ----------------------------------------------------------------------

HomeMinimal.propTypes = {
  ratingList: PropTypes.array,
};

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#F7FFFF',
  textAlign: 'left',
  height: 220,
  width: '100%',
  padding: theme.spacing(4, 4),
  [theme.breakpoints.up('md')]: {
    boxShadow: theme.shadows[5], // Adjust the shadow level as needed
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
    width: '10%', // Adjust the percentage as needed
    height: '10%',
    backgroundColor: '#BDEAF1',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal({ ratingList }) {
  return (
    <StyledRoot>
      <Container>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <StyledTypography variant="h3" sx={{ textAlign: 'center', zIndex: 1 }}>
              Хамгийн сүүлийн үнэлгээнүүд{' '}
            </StyledTypography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 5 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {ratingList.slice(0, 6).map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
                <StyledCard>
                  <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ mt: 0, mb: 0 }}>
                      {card?.teacher?.firstName}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }} variant="body2">
                      {new Date(card.lastModifiedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}{' '}
                    </Typography>
                  </Stack>
                  <Stack gap={1}>
                    <Typography variant="subtitle1" sx={{ mt: 0, mb: 0 }}>
                      {card.lessonName}
                    </Typography>
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
                      {card.review}
                    </Typography>

                    <Rating
                      name="read-only"
                      value={card?.score}
                      readOnly
                      sx={{ justifyContent: 'flex-end' }}
                    />
                  </Stack>
                </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
