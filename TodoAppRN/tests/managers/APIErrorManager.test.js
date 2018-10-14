import APIErrorManager from '../../src/managers/APIErrorManager';

describe('when APIErrorManager receives ok status responses', () => {
  it('expects hasError to return false with a 200 status', () => {
    expect(APIErrorManager.hasError({ status: 200 })).toBeFalsy();
  });

  it('expects hasError to return false when response.status is 200', () => {
    expect(APIErrorManager.hasError({ response: { status: 200 } })).toBeFalsy();
  });
});

describe('when APIErrorManager receives wrong responses', () => {
  it('expects hasError to return true with a 400 status', () => {
    expect(APIErrorManager.hasError({ status: 404 })).toBeTruthy();
  });

  it('expects hasError to return true when response.status is 404', () => {
    expect(
      APIErrorManager.hasError({ response: { status: 404 } })
    ).toBeTruthy();
  });

  it('expects hasError to return true when data name value is Error', () => {
    expect(APIErrorManager.hasError({ name: 'Error' })).toBeTruthy();
  });
});
