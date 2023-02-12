import FriendStatus from "./FriendsData";

export type FriendType = {
    id: number;
    firstName: string;
    lastName: string;
    friendStatus: typeof FriendStatus;
    email: string;
    phoneNumber: number;
};