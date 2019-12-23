export const hello = () => 'Hello';

export const add = (x, y) => {
    /*
    if (typeof x === 'string' || typeof y === 'string')
        return null;
    */
    if (typeof x !== 'number' || typeof y !== 'number')
        return null;
    return x + y;
};