import { Ang2SwitchboardPage } from './app.po';

describe('ang2-switchboard App', () => {
  let page: Ang2SwitchboardPage;

  beforeEach(() => {
    page = new Ang2SwitchboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
