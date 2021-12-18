module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Full Stack VNNM ⛰️😺🌐🌪️ CRUD APP plus Bootstrap 🥾 | VNNM'
      args[0].meta = {
        description:
          'Full Stack [V]ue.js ⛰️ [N]est.js 😺 [N]ode.js 🌐 [M]icrosoft SQL Server 🌪️ CRUD Web App + Bootstrap 🥾',
      }
      return args
    })
  },
}
