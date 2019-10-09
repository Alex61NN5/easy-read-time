import getReadTime from './index';

describe('Get Read Time', () => {

  test('returns object', () => {
    expect(getReadTime('Read', 1)).toMatchObject({
      duration: expect.any(Number),
      formattedString: expect.any(String),
      roundDuration: expect.any(Number),
      totalWords: expect.any(Number)
    });
  });

  test('returns object for invalid arguments', () => {
    expect(getReadTime(undefined, -1)).toMatchObject({
      duration: expect.any(Number),
      formattedString: expect.any(String),
      roundDuration: expect.any(Number),
      totalWords: expect.any(Number)
    });
  });

  test('returns duration', () => {
    expect(getReadTime('Time', 1).duration).toBe(1);
  });

  test('returns formatted string', () => {
    expect(getReadTime('Easy Read Time', 1).formattedString).toBe('3 min read');
  });

  test('returns round duration', () => {
    expect(getReadTime('Easy Estimated Read Time v1', 3).roundDuration).toBe(2);
  });

  test('returns total words', () => {
    expect(getReadTime('Easy Read').totalWords).toBe(2);
  });

  test('supports argument words per minute', () => {
    expect(getReadTime('Easy Read Time', 3).duration).toBe(1);
  });

  test('supports argument custom string', () => {
    expect(getReadTime('Easy', 0.5, 'm').formattedString).toBe('2 m');
  });

});
