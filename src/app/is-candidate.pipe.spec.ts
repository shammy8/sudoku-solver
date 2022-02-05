import { IsCandidatesPipe } from './is-candidate.pipe';

describe('TypeOfPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCandidatesPipe();
    expect(pipe).toBeTruthy();
  });
});
