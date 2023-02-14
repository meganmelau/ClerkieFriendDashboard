import { FriendStatus } from "./FriendType";

const friends = [
    {
      id: 1,
      firstName: 'Megan',
      lastName: 'Lau',
      friendStatus: FriendStatus.SuperClose,
      email: 'megan.lau.contact@gmail.com',
      phoneNumber: '6173048412'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      friendStatus: FriendStatus.Close,
      email: 'jane.doe@gmail.com',
      phoneNumber: '6173225678'
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Smith',
        friendStatus: FriendStatus.None,
        email: 'bob.smith@gmail.com',
        phoneNumber: '6173224000'
      }
]

export default friends;