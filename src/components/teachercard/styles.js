// teachercard/styles.js

import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Rating, Button } from '@mui/material';

export const StyledTeacherCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4), 
  maxWidth: 700,
  margin: 'auto',
  textAlign: 'left',
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  marginBottom: theme.spacing(1),
}));

export const StyledRatingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const StyledTotalRatings = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(1),
  marginBottom: 0,
}));

export const StyledCourses = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  maxWidth: 400,
}));

export const StyledCourseLink = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
