import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout').middleware('auth:api')
  Route.post('/user', 'AuthController.user').middleware('auth:api')
})
  .prefix('api')
  .namespace('App/Controllers/Http/Api')
