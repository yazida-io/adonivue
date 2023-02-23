import BaseModel from 'App/Models/BaseModel'
import { column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public googleId?: string

  @column()
  public twitterId?: string

  @column({ serializeAs: null })
  public deletedAt?: Date
}
