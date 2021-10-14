import faker from 'faker'

export const ContactsMocked = Array.from({ length: 20 }).map(() => ({
  id: faker.datatype.uuid(),
  avatarUrl: faker.internet.avatar(),
  lastMessage: faker.random.words(20),
  contactName: faker.internet.userName()
}))
