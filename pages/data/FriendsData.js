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
      firstName: 'Harry',
      lastName: 'Potter',
      friendStatus: FriendStatus.SuperClose,
      email: 'harry.potter@gmail.com',
      phoneNumber: '5173225678'
    },
    {
        id: 3,
        firstName: 'Hermione',
        lastName: 'Granger',
        friendStatus: FriendStatus.SuperClose,
        email: 'bob.smith@gmail.com',
        phoneNumber: '4173224000'
    },
    {
      id: 1,
      firstName: 'Ron',
      lastName: 'Weasely',
      friendStatus: FriendStatus.SuperClose,
      email: 'megan.lau.contact@gmail.com',
      phoneNumber: '9173048416'
    },{
      id: 1,
      firstName: 'Neville',
      lastName: 'Longbottom',
      friendStatus: FriendStatus.Close,
      email: 'Nevel.Longbottom@gmail.com',
      phoneNumber: '6173048412'
    },
    {
      id: 2,
      firstName: 'Fred',
      lastName: 'Weasely',
      friendStatus: FriendStatus.Close,
      email: 'fred.weasely@gmail.com',
      phoneNumber: '6153225678'
    },
    {
        id: 3,
        firstName: 'George',
        lastName: 'Weasely',
        friendStatus: FriendStatus.Close,
        email: 'George.Weasely@gmail.com',
        phoneNumber: '6177224000'
    },
    {
      id: 2,
      firstName: 'Draco',
      lastName: 'Malfoy',
      friendStatus: FriendStatus.None,
      email: 'Draco.malfoy@gmail.com',
      phoneNumber: '7173225671'
    },
    {
        id: 3,
        firstName: 'Lord',
        lastName: 'Voldemort',
        friendStatus: FriendStatus.None,
        email: 'he.who.must.not.be.named@gmail.com',
        phoneNumber: '8173124000'
    }
]

export default friends;