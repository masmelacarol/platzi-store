import { CountPipe } from './count.pipe';

xdescribe('CountPipe', () => {
  it('create an instance', () => {
    const pipe = new CountPipe();
    expect(pipe).toBeTruthy();
  });
});
