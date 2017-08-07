import { Angular4ExperimentsPage } from './app.po';

describe('angular4-experiments App', () => {
  let page: Angular4ExperimentsPage;

  beforeEach(() => {
    page = new Angular4ExperimentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
