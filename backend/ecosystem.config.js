module.exports = {
  apps: [
    {
      name: 'vibe-api-server',
      script: './dist/app.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
