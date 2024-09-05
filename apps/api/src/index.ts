import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({
  role: 'MEMBER',
  id: 'user-id',
  __typename: 'User',
})

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', 'Project'))
