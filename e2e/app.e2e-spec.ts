import { MotosPage } from './app.po';

describe('motos App', function() {
  let page: MotosPage;

  beforeEach(() => {
    page = new MotosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
