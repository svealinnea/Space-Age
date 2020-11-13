import { TestScheduler } from 'jest';
import {UserAge} from '../src/space.js';

describe ('UserAge', () => {
  test('should correctly identify a users age', () => {
    const userage = new UserAge(12)
    expect(userage.age).toEqual(12);
  });
  test('should return the users age in Mercury years', () => {
    const newuser = new UserAge(12)
    expect(newuser.mercury).toEqual(50);
  });
    test('should return the users age in Venus Years', () => {
    const newuser = new UserAge(12)
    expect(newuser.venus).toEqual(19.35483870967742)
  });
    test('should return the users age in Mars Years', () => {
    const newuser = new UserAge(12)
    expect(newuser.mars).toEqual(6.382978723404256)
  });
    test('should return the users age in Jupiter Years', () => {
    const newuser = new UserAge(12)
    expect(newuser.jupiter).toEqual(1.01010101010101)
    });
    test ('Should correctly respond that a person is not alive if zero', () => {
      const newuser = new UserAge(0)
      expect(newuser.deadExpectancy()).toMatch("You are not alive!")
      });
      test ('Should let the user know how much away from life expectancy they are if they are over 100', () => {
        const newuser = new UserAge(100)
        expect(newuser.deadExpectancy()).toEqual(0)
        })
})
/*
1. needs to return the users age in Earth Years
2. should return the users age in Mercury years (.24 Earth Years, 12%.24)
3. should return the users age in Venus Years (.62 Earth Years 12%.62)
4. should return the users age in Mars Years (1.88 Earth Years 12% 1.88)
5. should return the users age in Jupiter Years (11.86 Earth Years 12 % 11.86) 

*/