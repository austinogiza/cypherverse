export const host =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://api.legendsofcypher.io"

export const baseURL = `http://127.0.0.1:8000`

export const joinWaitList = `${host}/api/join-list/`
