const PATHS = {
  HOME: '/',
  PRICES: '/cennik',
  ABOUT: '/o-mnie',
  CONTACT: '/kontakt',
  PORTFOLIO: '/portfolio'
};
PATHS.CATEGORY = PATHS.PORTFOLIO + '/:categoryId';
PATHS.RESOURCE = PATHS.CATEGORY + '/:resourceId';

export default PATHS;
