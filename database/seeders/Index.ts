import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'Mouctar DIALLO',
      email: Env.get('ADMIN_USER_EMAIL'),
      password: await Hash.make(Env.get('ADMIN_USER_PASSWORD')),
    })
    await UserFactory.createMany(10)
  }
}
