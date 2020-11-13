import { TestScheduler } from 'jest';
import {LifeExp} from '../src/space.js';
describe ('LifeExp', () => {
  test('Should correctly return the users life expectancy on Mercury', () => {
    const newlife = new LifeExp(12)
    expect(newlife.mercuryexp).toEqual(6)
  });
    test('Should correctly return the users life expectancy on Venus', () => {
      const newlife = new LifeExp(12)
      expect(newlife.venusexp).toEqual(9)
    });
    test('Should correctly return the users life expectancy on Mars', () => {
      const newlife = new LifeExp(12)
      expect(newlife.marsexp).toEqual(24)
    })
})