import { TestScheduler } from 'jest';
import {LifeExp} from '../src/space.js';
describe ('LifeExp', () => {
  test('Should correctly return the users life expectancy on Mercury', () => {
    const newlife = new LifeExp(12)
    expect(newlife.mercuryexp).toEqual(6)
  });
})