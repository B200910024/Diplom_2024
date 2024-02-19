import { m } from 'framer-motion';
import Head from 'next/head';
import { Typography } from '@mui/material';
import MainLayout from '../layouts/main';
import { MotionContainer, varBounce } from '../components/animate';
import TeacherCard from '../components/teachercard'; 

const teachers = [
  {
    name: 'Багш 1',
    rating: 4.5,
    totalRatings: 50,
    courses: ['Хичээл 1', 'Хичээл 2', 'Хичээл 3', 'Хичээл 4', 'Хичээл 4', 'Хичээл 4', 'Хичээл 4', 'Хичээл 4'],
    rateLink: '/rate/teacher1',
  },
  {
    name: 'Багш 2',
    rating: 4.8,
    totalRatings: 32,
    courses: ['Математик', 'Физик'],
    rateLink: '/rate/teacher2',
  },
  {
    name: 'Багш 3',
    rating: 4.2,
    totalRatings: 51,
    courses: ['Монгол хэл', 'Литератур'],
    rateLink: '/rate/teacher3',
  },
  {
    name: 'Багш 4',
    rating: 4.7,
    totalRatings: 5,
    courses: ['Биологи', 'Газар зүй'],
    rateLink: '/rate/teacher4',
  },
];

PopularTeachers.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function PopularTeachers() {
  return (
    <>
      <Head>
        <title> Popular Teachers | Minimal UI</title>
      </Head>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" align="center" sx={{ mb: 2, color: 'primary.main' }}>
            Алдартай багш нартай танилцана уу!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography align="center" sx={{ color: 'text.secondary' }}>
            Энд бид хамгийн хайртай багш нарынхаа заримыг толилуулж байна.
          </Typography>
        </m.div>

        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.name}
            name={teacher.name}
            rating={teacher.rating}
            totalRatings={teacher.totalRatings}
            courses={teacher.courses}
            rateLink={teacher.rateLink}
          />
        ))}
      </MotionContainer>
    </>
  );
}