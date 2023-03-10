export enum FriendStatus {
  Close = "Close Friend",
  SuperClose = "Super Close Friend",
  None = "None",
}

export type FriendType = {
  id: number;
  firstName: string;
  lastName: string;
  friendStatus: FriendStatus;
  email: string;
  phoneNumber: string;
};
