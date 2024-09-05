import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionByRole> = {
  ADMIN(_, { can }) {
    can('menage', 'all')
  },
  MEMBER(_, { can }) {
    can('menage', 'Project')
  },
  BILLING() {},
}
