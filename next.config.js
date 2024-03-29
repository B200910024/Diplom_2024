module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    HOST_API_LOGIN: 'https://rating-teacher-5ac5dc4d5f94.herokuapp.com/api/authenticate',
    HOST_API_GENERAL: 'https://rating-teacher-5ac5dc4d5f94.herokuapp.com/api/',
    HOST_API_REGISTER: 'https://rating-teacher-5ac5dc4d5f94.herokuapp.com/api/register',
    HOST_API_MY_ACCOUNT: 'https://rating-teacher-5ac5dc4d5f94.herokuapp.com/api/get_auth_info',
    // MAPBOX
    MAPBOX_API: '',
    // FIREBASE
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_DOMAIN: '',
    AUTH0_CLIENT_ID: '',
  },
};
