import axios from "axios";

// 用户角色身份
export type UserRoleType = "user" | "admin";

// 返回
export interface GetUserRoleRes {
  userType: UserRoleType;
}

export interface Result<T> {
  code: number;
  message: string;
  data: T;
}

// 获取用户角色身份
export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>(
    "https://dev.usemock.com/636b59bbcc89b05b04a0bbf5/api/role"
  );
};
