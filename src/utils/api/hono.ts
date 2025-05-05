import type { AppType } from "@/app/api/[[...routes]]/route";
import { hc } from "hono/client";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!)