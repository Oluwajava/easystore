import { EasystorePage } from './app.po';

describe('easystore App', () => {
  let page: EasystorePage;

  beforeEach(() => {
    page = new EasystorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
