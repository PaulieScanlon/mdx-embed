export function config(entry = []) {
  return [...entry, require.resolve('./default-parameters')];
}
