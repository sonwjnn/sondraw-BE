import { Exclude, Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FileType } from '@/modules/files/domain/file'

export class UserDto {
  @ApiProperty({
    type: String,
  })
  id: string

  @ApiProperty({
    type: String,
    example: 'johndoe',
  })
  username: string | null

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  name: string | null

  @ApiProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  @Expose({ groups: ['me', 'admin'] })
  email: string

  @ApiProperty({
    type: Date,
  })
  emailVerified: Date | null

  @Exclude({ toPlainOnly: true })
  password?: string | null

  @ApiProperty({
    type: String,
    example: 'https://image_url.com',
  })
  imageUrl?: string | null

  @ApiProperty({
    type: Boolean,
    default: false,
  })
  isTwoFactorEnabled: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
