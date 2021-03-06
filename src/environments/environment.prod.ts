const WEB = 'http://backend-quemag-santillan.test/';
const API = 'http://backend-quemag-santillan.test/api/v1';

export const environment = {
  production: true,
  WEB,
  STORAGE_URL: WEB + '/storage',
  API_URL_AUTHENTICATION: API + '/authentication',
  API_URL_PRIVATE: API + '/private',
  API_URL_PUBLIC: API + '/public',
};
