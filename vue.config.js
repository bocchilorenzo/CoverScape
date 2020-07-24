module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://api.deezer.com/'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://e-cdns-images.dzcdn.net/'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'images',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}
