module.exports = {
  apps: [
    {
      name: 'doctor-blog-nextjs',
      script: './standalone/server.js',
      cwd: '/var/www/doctor-blog',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_URL:  'https://new-beginning-admin.alnitak.app/api/v1',
      },
      error_file: '/var/log/pm2/doctor-blog-error.log',
      out_file: '/var/log/pm2/doctor-blog-out.log',
      log_file: '/var/log/pm2/doctor-blog-combined.log',
      time: true,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
      ignore_watch: ['node_modules', '.next'],
      merge_logs: true,
    },
  ],
}
