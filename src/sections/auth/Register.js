// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <LoginLayout title="Manage the job more effectively with Minimal">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Бүртгүүлэх</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2"> Бүртгэлтэй хэрэглэгч бол </Typography>
          <Stack alignItems="center" gap={1} direction="row">
            <Link
              component={NextLink}
              href={PATH_AUTH.login}
              variant="subtitle2"
              sx={{ color: '#F2A121' }}
            >
              Нэвтрэх
            </Link>
            <Iconify icon="tabler:arrow-right" sx={{ color: '#F2A121' }} />
          </Stack>
        </Stack>
      </Stack>

      <AuthRegisterForm />

      {/* <Typography
        component="div"
        sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
      >
        {'By signing up, I agree to '}
        <Link underline="always" color="text.primary">
          Terms of Service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary">
          Privacy Policy
        </Link>
        .
      </Typography> */}

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
