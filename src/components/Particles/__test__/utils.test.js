import {getMonthName,getMonthNameByDateIndex,getMonth , getYear , getDate } from '../utils/dateUtils'
import {getRndInteger} from '../utils/mathUtils'

test('getMonthName' , ()=>{
    const expectedMonthName = getMonthName(new Date().getMonth());
    expect(expectedMonthName).toBe('September');
})

test('getMonthNameByDateIndex' , ()=>{
    const expectedMonthName = getMonthNameByDateIndex(0);
    expect(expectedMonthName).toBe('January');
})
test('getMonth' , ()=>{
    const expectedMonth = getMonth(new Date().getMonth());
    expect(expectedMonth).toBe(8);
})

test('getYear' , ()=>{
    const expectedCurrentYear = getYear();
    expect(expectedCurrentYear).toBe(2020);
})


test('getDate' , ()=>{
    const expectedCurrentDate = getDate();
    expect(expectedCurrentDate).toBe(23);
})


test('getRndInteger' , ()=>{
    const expectedRandomIntger = getRndInteger(0,10);
    expect(expectedRandomIntger).toBeLessThan(9);
})


test('getRndInteger' , ()=>{
    const expectedRandomIntger = getRndInteger(0,100);
    expect(expectedRandomIntger).toBeGreaterThan(0);
})
