// teachercard/TeacherCard.js

import NextLink from 'next/link';
import {
  StyledTeacherCard,
  StyledName,
  StyledRatingContainer,
  StyledRating,
  StyledTotalRatings,
  StyledCourses,
  StyledCourseLink,
  StyledButton,
} from './styles';

function TeacherCard({ name, rating, courses, rateLink, totalRatings }) {
  return (
    <StyledTeacherCard style={{ marginBottom: '16px' }}> 
      <StyledName variant="h5">{name}</StyledName>
      <StyledRatingContainer>
        <StyledRating value={rating} readOnly />
        <StyledTotalRatings variant="body2">{`Нийт санал: ${totalRatings}`}</StyledTotalRatings>
      </StyledRatingContainer>
      <StyledCourses variant="subtitle1">
        {courses.map((course, index) => (
          <StyledCourseLink
            key={index}
            component={NextLink}
            href={`/course/${course}`}
            variant="body2"
          >
            {course}
          </StyledCourseLink>
        ))}
      </StyledCourses>
      <StyledButton component={NextLink} href={rateLink}>
        Үнэлгээ өгөх
      </StyledButton>
    </StyledTeacherCard>
  );
}

export default TeacherCard;
