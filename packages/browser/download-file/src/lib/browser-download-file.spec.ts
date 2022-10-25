import { browserDownloadFile } from './browser-download-file';

describe('browserDownloadFile', () => {
  it('should work', () => {
    expect(browserDownloadFile()).toEqual('browser-download-file');
  });
});
