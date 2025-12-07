// Computes a stable origin for server-side redirects on Vercel and locally.
export const getBaseUrl = (): string => {
  const configured = process.env.NEXT_PUBLIC_HOST_URL;
  const vercel = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
  const fallback = "http://localhost:3000";

  return (configured || vercel || fallback).replace(/\/$/, "");
};
