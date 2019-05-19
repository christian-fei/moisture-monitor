module.exports = {
  apps: [{
    name: 'MOISTURE_MONITOR',
    instances: 1,
    script: 'npm',
    args: 'start',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }],
  deploy: {
    production: {
      user: 'pi',
      host: 'zeropi',
      ref: 'origin/master',
      repo: 'https://github.com/christian-fei/moisture-monitor.git',
      path: '/home/pi/apps/moisture-monitor',
      'pre-deploy': 'mkdir -p /home/pi/apps',
      'post-deploy': 'npm i && pm2 startOrGracefulReload ecosystem.config.js --env production'
    }
  }
}
