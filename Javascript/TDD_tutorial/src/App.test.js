import { hello, add, removeSNames } from './App';
console.log(hello()+"!")

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
});

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
    });
});

describe('removeSNames', () => {
    it('should remove all s names', () => {
        const names = ['Scott', 'Courtney', 'Steve'];
        expect(removeSNames(names)).not.toContain('Steve');
        expect(removeSNames(names)).not.toContain('Scott');
    });
    it('should not remove other names', () => {
        const names = ['Scott', 'Courtney', 'Wes'];
        expect(removeSNames(names)).toContain('Courtney');
        expect(removeSNames(names)).toContain('Wes');
    });
    it('should account for case', () => {
        const names = ['Scott', 'Courtney', 'Wes', 'scott'];
        expect(removeSNames(names)).not.toContain('Scott');
        expect(removeSNames(names)).not.toContain('scott');
    });
});
