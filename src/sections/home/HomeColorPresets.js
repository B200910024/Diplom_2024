import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Rating, Button } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { PATH_AUTH } from '../../routes/paths';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFamousTeacherList } from '../../redux/slices/teacher';
import CreateReviewDialog from './action/CreateReviewDialog';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Branding',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'UI & UX Design',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    subTitile: 'Subject 1',
    date: '2023-11-20',
    description: '222 санал',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#F7FFFF',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  // backgroundColor: '#F7FFFF',
  textAlign: 'left',

  // border: 'solid black 1px',
  padding: theme.spacing(5, 5),
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

export default function HomeColorPresets() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuthContext();
  const famousTeacherList = useSelector((state) => state.teacher.famousTeacherList.slice(0, 6));

  const [value] = useState(2);

  useEffect(() => {
    // Fetch famous teachers data when the component mounts
    dispatch(fetchFamousTeacherList());
  }, [dispatch]);

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
              Хамгийн олон саналтай багш{' '}
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
          {famousTeacherList.map((teacher) => {
            // Calculate the average rating
            const averageRating =
              teacher.ratings.reduce((total, rating) => total + rating.score, 0) /
              teacher.ratings.length;

            return (
              <m.div variants={varFade().inUp} key={teacher.id}>
                <StyledCard>
                  <Stack gap={1.5}>
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h5" sx={{ mt: 0, mb: 0 }}>
                        {`${teacher.lastName}. ${teacher.firstName}`}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={averageRating} // Use the average rating here
                        readOnly
                        sx={{ justifyContent: 'flex-end' }}
                      />
                    </Stack>
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="caption">
                        {teacher.ratings.length > 0 ? teacher.ratings[0].lessonName : 'Хичээл'}
                      </Typography>
                      <Button
                        // href={isAuthenticated && PATH_AUTH.login}
                        onClick={<CreateReviewDialog />}
                        variant="secondary"
                        sx={{
                          color: 'primary.main',
                          boxShadow: '0px 0px 5px   rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        Санал өгөх
                      </Button>
                    </Stack>
                  </Stack>
                </StyledCard>
              </m.div>
            );
          })}
        </Box>
      </Container>
    </StyledRoot>
  );
}
