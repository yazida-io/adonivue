import { DateTime } from 'luxon'
import { BaseModel as Lucid, column } from '@ioc:Adonis/Lucid/Orm'

export default class BaseModel extends Lucid {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
