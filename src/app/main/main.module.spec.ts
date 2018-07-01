import { MainModule } from './main.module';

describe('MainModule', () => {
  let MainModule: MainModule;

  beforeEach(() => {
    MainModule = new MainModule();
  });

  it('should create an instance', () => {
    expect(MainModule).toBeTruthy();
  });
});