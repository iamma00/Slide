"use server";

// NOTE: Clerk integration removed. Using placeholder manual auth.
// TODO: Implement proper session-based auth with manual user management

export const onCurrentUser = async () => {
  // Placeholder - replace with actual session retrieval
  return {
    id: "test-user-id",
    firstName: "Test",
    lastName: "User",
    emailAddresses: [{ emailAddress: "test@example.com" }],
  };
};

export const onBoardUser = async () => {
  // Placeholder - replace with actual user registration flow
  return {
    status: 200,
    data: {
      firstname: "Test",
      lastname: "User",
    },
  };
};

export const onUserInfo = async () => {
  return {
    status: 200,
    data: null,
  };
};

export const onSubscribe = async (session_id: string) => {
  // Placeholder - replace with actual payment verification
  return { status: 200 };
};
