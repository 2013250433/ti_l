import { hello } from './App';
console.log(hello())

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
})