import { AppPage } from './app.po';

describe('lastfm-toolbox App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Last.fm Toolbox');
  });
});
