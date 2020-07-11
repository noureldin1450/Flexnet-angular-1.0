import { MoviePlayerPipe } from './movie-player.pipe';

describe('MoviePlayerPipe', () => {
  it('create an instance', () => {
    const pipe = new MoviePlayerPipe();
    expect(pipe).toBeTruthy();
  });
});
