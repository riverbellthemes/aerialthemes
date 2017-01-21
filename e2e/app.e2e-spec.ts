import { AerialthemesPage } from './app.po';

describe('aerialthemes App', function() {
  let page: AerialthemesPage;

  beforeEach(() => {
    page = new AerialthemesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
