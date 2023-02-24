import getBuffer from '../ArrayBuffer/arrayBuffer';
import ArrayBufferConverter from '../ArrayBuffer/ArrayBufferConverter';

test('should create ArrayBufferConverter for "ArrayBuffer"', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(arrayBuffer);
  expect(arrayBufferConverter.buffer).toEqual(arrayBuffer);
});

test('should String "{"data":{"user":{"id":1,"name":"Hitman","level":10}}}" for "ArrayBuffer"', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(arrayBuffer);
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
