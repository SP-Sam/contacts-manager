export function formatMobile(email: string): string {
  const part1 = email.slice(0, 2);
  const part2 = email.slice(2, 7);
  const part3 = email.slice(7, 11);

  return `(${part1}) ${part2}-${part3}`;
}
