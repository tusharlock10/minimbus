const w: any = typeof window === "undefined" ? null : window;

export const runtime = w?.runtime ?? null;
