import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let CoreModule: CoreModule;

  beforeEach(() => {
    CoreModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(CoreModule).toBeTruthy();
  });
});