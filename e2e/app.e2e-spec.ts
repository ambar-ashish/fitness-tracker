import { FitnessTrackerPage } from './app.po';

describe('fitness-tracker App', function() {
  let page: FitnessTrackerPage;

  beforeEach(() => {
    page = new FitnessTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
