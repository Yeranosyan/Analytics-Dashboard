import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://gusc1-humane-jackass-30327.upstash.io",
  token: process.env.REDIS_KEY!,
});
