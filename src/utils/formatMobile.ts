export function formatMobile(mobile: string): string {
  const part1 = mobile.slice(0, 2);
  const part2 = mobile.slice(2, 7);
  const part3 = mobile.slice(7, 11);

  return `(${part1}) ${part2}-${part3}`;
}
