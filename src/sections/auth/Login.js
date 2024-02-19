// next
import NextLink from 'next/link';
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';

// components
import Iconify from '../../components/iconify/Iconify';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Нэвтрэх</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2"> Бүртгэлгүй хэрэглэгч бол </Typography>

          <Stack alignItems="center" gap={1} direction="row">
            <Link
              component={NextLink}
              href={PATH_AUTH.register}
              variant="subtitle2"
              sx={{ color: '#F2A121' }}
            >
              Бүртгүүлэх
            </Link>
            <Iconify icon="tabler:arrow-right" sx={{ color: '#F2A121' }} />
          </Stack>
        </Stack>

        {/* <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip> */}
      </Stack>

      {/* <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
      </Alert> */}

      <AuthLoginForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
