import { ToActiveStatePipe } from './to-active-state.pipe';

describe('ToActiveStatePipe', () => {
  it('create an instance', () => {
    const pipe = new ToActiveStatePipe();
    expect(pipe).toBeTruthy();
  });
});
