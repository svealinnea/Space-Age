import { TestScheduler } from 'jest';
import {UserAge} from '../src/space.js';

describe ('UserAge', () => {
  test('should correctly identify a users age', () => {
    const userage = new UserAge(12)
    expect(userage.age).toEqual(12);
  })
})
/*
1. needs to return the users age in Earth Years
2. should return the users age in Mercury years (.24 Earth Years, 12%.24)
3. should return the users age in Venus Years (.62 Earth Years 12%.62)
4. should return the users age in Mars Years (1.88 Earth Years 12% 1.88)
5. should return the users age in Jupiter Years (11.86 Earth Years 12 % 11.86)

*/