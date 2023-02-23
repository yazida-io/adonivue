import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { faker } from '@faker-js/faker'

export default class OAuthController {
  public async oauthRedirect({ ally, params }: HttpContextContract) {
    const { provider } = params as { provider: 'github' | 'google' | 'twitter' | 'linkedin' }
    const oauth = await ally.use(provider)
    return oauth.redirect()
  }

  public async oauthCallback({ params, ally, response, auth, session }: HttpContextContract) {
    const { provider } = params as { provider: 'github' | 'google' | 'twitter' | 'linkedin' }
    const oauth = ally.use(provider)

    const oauthUser = await oauth.user()

    const user = await User.firstOrCreate(
      { email: oauthUser.email! },
      {
        name: oauthUser.name,
        password: await Hash.make(faker.internet.password()),
      }
    )

    const userData = user.serialize({ fields: { pick: ['id', 'name', 'email'] } })

    const token = await auth.use('api').generate(user, { expiresIn: '1 day' })

    session.put('token', token.token)
    session.put('user', userData)

    return response.redirect().toRoute('oauth.response')
  }

  public async onOAuthResponse({ view, session }: HttpContextContract) {
    if (!session.get('token') || !session.get('user')) {
      return view.render('error')
    }

    const token = session.get('token')
    const user = session.get('user')

    session.clear()

    return view.render('success', { token, user })
  }
}
