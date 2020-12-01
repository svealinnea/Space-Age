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
    expect(newuser.venus).toEqual(19)
  });
    test('should return the users age in Mars Years', () => {
    const newuser = new UserAge(12)
    expect(newuser.mars).toEqual(6)
  });
    test('should return the users age in Jupiter Years', () => {
    const newuser = new UserAge(12)
    expect(newuser.jupiter).toEqual(1)
  });
    test('should return the users over life expectancy on Mercury', () => {
    const newuser = new UserAge(240)
    expect(newuser.mercuryExp()).toMatch('uh oh looks like you have overstayed your welcome by 760 years!')
    });
    test('should return the users life expectancy on Venus', () => {
    const newuser = new UserAge(100)
    expect(newuser.venusExp()).toMatch('Your life expectancy on Venus is 459 more years')
    });
  });