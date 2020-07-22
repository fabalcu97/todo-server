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
      key: '~/.ssh/fabalcu97',
      user: 'fabalcu97',
      host: 'cubietruck',
      ref: 'origin/master',
      repo: 'git@github.com:fabalcu97/todo-server.git',
      path: '/home/fabalcu97/todo-server',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      'pre-setup': '',
    },
  },
};
