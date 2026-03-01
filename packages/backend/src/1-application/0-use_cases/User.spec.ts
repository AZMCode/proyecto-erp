import { expect, test, mock } from "bun:test";
import type { Verifiers } from "src/0-domain/Password";
import type { UserPort } from "../1-ports/db/User";
import { User } from "src/0-domain/User";

test("Register Creates a user with Generated Verifiers", () => {
  const mockVerifier: Verifiers =  {
    password: "Verifier Output"
  };
  const mockUser: User =
    new User(
      "00000000-0000-0000-0000-000000000000",
      {
        userName: "mockUser"
      },
      {
        password: "mockPasswd"
      }
    );
  const mockUserPort: UserPort = {
    createUser: mock.fn((_info, _verifiers) => mockUser),
    fetchByUserName: mock.fn((_username) => mockUser),
    fetchByUUID: mock.fn((_username) => mockUser)
  };

})
