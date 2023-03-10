module.exports = {
  apps: [
    {
      name: 'test-1',
      cwd: '/devtechlottus/cmsuane/multitenant-strapi',
      script: 'yarn',
      args: 'develop',
      env: {
        NODE_ENV: 'test-1',
        HOST_PORT_TEST1: '1338',
        DATABASE_HOST_PRODUCTION: 'localhost', 
        DATABASE_PORT_PRODUCTION: 5432,
        DATABASE_USER_PRODUCTION: 'postgres',
        DATABASE_PASS_PRODUCTION: 'pedrito',
        DATABASE_NAME_TEST1: 'test1',
        ADMIN_JWT_SECRET :'+1L+BggFnffy228YrZSIvg==',
        DOMAIN_URL: 'localhost'
      }
    },
    {
      name: 'test-2',
      cwd: '/devtechlottus/cmsuane/multitenant-strapi',
      script: 'yarn',
      args: 'develop',
      env: {
        NODE_ENV: 'test-2',
        HOST_PORT_TEST2: '1339',
        DATABASE_HOST_PRODUCTION: 'localhost',
        DATABASE_PORT_PRODUCTION: 5432,
        DATABASE_USER_PRODUCTION: 'postgres', 
        DATABASE_PASS_PRODUCTION: 'pedrito',
        DATABASE_NAME_TEST2: 'test2',
        ADMIN_JWT_SECRET :'+1L+BggFnffy228YrZSIvg==',
        DOMAIN_URL: 'localhost'
      }
    }
  ]
};