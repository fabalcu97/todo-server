module.exports = {
  apps: [
    {
      name: 'server',
      script: './dist/index.js',
      watch: './dist/',
    },
  ],

  deploy: {
    dev: {
      user: 'fabalcu97',
      host: 'cubietruck',
      ref: 'origin/master',
      repo: 'https://github.com/fabalcu97/todo-server',
      path: '/home/fabalcu97/deploy',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
