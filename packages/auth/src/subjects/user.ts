import { z } from 'zod'

import { userSchema } from '../models/user'

export const userSubject = z.tuple([
  z.union([
    z.literal('menage'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
  ]),

  z.union([z.literal('User'), userSchema]),
])

export type UserSubject = z.infer<typeof userSubject>
