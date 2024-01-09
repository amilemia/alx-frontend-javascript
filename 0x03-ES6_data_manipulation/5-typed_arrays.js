export default function createInt8TypeArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view = new Int8Array(buffer);
  if (position > view.length) {
    throw new Error('Position outside ranges');
  }
  view[position] = value;

  return new DataView(buffer);
}
