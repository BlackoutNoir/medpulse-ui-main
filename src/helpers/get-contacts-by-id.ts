import { fetchRedis } from './redis'

export const getContactsByUserId = async (userId: string) => {
  // retrieve contacts for current user
  console.log("userid", userId)
  const contactIds = (await fetchRedis(
    'smembers',
    `user:${userId}:contacts`
  )) as string[]
  console.log("contact ids", contactIds)

  const contacts = await Promise.all(
    contactIds.map(async (contactId) => {
      const contact = await fetchRedis('get', `user:${contactId}`) as string
      const parsedContact = JSON.parse(contact) as User
      return parsedContact
    })
  )

  return contacts
}