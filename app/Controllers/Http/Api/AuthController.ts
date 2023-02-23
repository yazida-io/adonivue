import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    const contract = await auth.use('api').attempt(email, password, { expiresIn: '1 days' })

    return response.json({
      token: contract.token,
      user: contract.user!.serialize({ fields: { pick: ['id', 'name', 'email'] } }),
    })
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()

    return response.json({ message: 'Logout successful' })
  }

  public async user({ auth, response }: HttpContextContract) {
    return response.json({
      user: {
        id: auth.user!.id,
        name: auth.user!.name,
        email: auth.user!.email,
      },
    })
  }
}
