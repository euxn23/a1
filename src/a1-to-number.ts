const a1chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function a1ToNumber(a1: string, zeroBasedIndex = false): number {
  try {
    return a1
      .toUpperCase()
      .split('')
      .reverse()
      .reduce((sum: number, char: string, idx: number) => {
        const a1Index = a1chars.indexOf(char);
        if (a1Index === -1) {
          throw new Error();
        }
        if (idx === 0) {
          return sum + a1Index + (zeroBasedIndex ? 0 : 1);
        } else {
          return sum + 26 ** idx * (a1Index + 1);
        }
      }, 0);
  } catch (e) {
    return 0;
  }
}
