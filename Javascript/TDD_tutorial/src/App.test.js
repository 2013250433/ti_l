import { hello, add } from './App';
console.log(hello()+"!")

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
})

describe('add', () => {
    it('should add two numbers', ()=>{
        expect(add(1,2)).toBe(3);
        expect(add(-2,2)).toBe(0);
        expect(add(2,12)).toBe(14);
    });
    it('should not add strings', ()=>{
        expect(add(2, '2')).toBe(null);
    });
    it('should not add objects', ()=>{
        expect(add(2, {})).toBe(null);
    })
})
