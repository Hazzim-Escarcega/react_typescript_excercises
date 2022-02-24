import { UserData } from "./interface";

export const hasUserAlreadyFeched = (users: UserData[], userId: number) => {
  return !!users.filter((user) => user.id === userId)[0];
};
