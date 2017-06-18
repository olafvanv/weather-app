import { WeatherAppPage } from './app.po';

describe('weather-app App', () => {
  let page: WeatherAppPage;

  beforeEach(() => {
    page = new WeatherAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
