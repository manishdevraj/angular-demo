import { FormsxModule } from './formsx.module';

describe('FormsModule', () => {
  let formsxModule: FormsxModule;

  beforeEach(() => {
    formsxModule = new FormsxModule(null);
  });

  it('should create an instance', () => {
    expect(formsxModule).toBeTruthy();
  });
});
