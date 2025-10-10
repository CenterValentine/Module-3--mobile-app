export function greet(name?: string): string {
  const safe = (name ?? "").trim();
  return safe ? `Hello, ${safe}!` : "Hello, world!";
}