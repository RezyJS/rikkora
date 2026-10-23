export function setAttribute(
  source: string,
  tag: string,
  name: string,
  expression: string,
) {
  const start = source.indexOf(`<${tag}`);
  if (start < 0) return source;
  let index = start + tag.length + 1;
  const insert = index;
  while (index < source.length) {
    while (/\s/.test(source[index] ?? '')) index++;
    if (source[index] === '>' || source.slice(index, index + 2) === '/>') break;
    const attrStart = index;
    while (/[\w:-]/.test(source[index] ?? '')) index++;
    if (index === attrStart) break;
    const attribute = source.slice(attrStart, index);
    while (/\s/.test(source[index] ?? '')) index++;
    if (source[index] === '=') {
      index++;
      while (/\s/.test(source[index] ?? '')) index++;
      const quote = source[index];
      if (quote === '"' || quote === "'") {
        index++;
        while (index < source.length && source[index] !== quote) {
          if (source[index] === '\\') index++;
          index++;
        }
        index++;
      } else if (quote === '{') {
        let depth = 1;
        index++;
        let string = '';
        while (index < source.length && depth) {
          const char = source[index++];
          if (string) {
            if (char === '\\') index++;
            else if (char === string) string = '';
          } else if (char === '"' || char === "'" || char === '`')
            string = char;
          else if (char === '{') depth++;
          else if (char === '}') depth--;
        }
      }
    }
    if (attribute === name)
      return `${source.slice(0, attrStart)}${name}={${expression}}${source.slice(index)}`;
  }
  return `${source.slice(0, insert)} ${name}={${expression}}${source.slice(insert)}`;
}
