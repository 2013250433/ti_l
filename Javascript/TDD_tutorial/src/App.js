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

export const removeSNames = names => {
    return names.filter(name => name.toLowerCase().charAt(0) !== 's');
    /*
    let newNames = names;
    newNames.forEach(name => {
        //if(name.charAt(0) === 's'){
        if(name.toLowerCase().charAt(0) === 's'){
            const index = newNames.indexOf(name);
            newNames.splice(index, 1);
        }
    })
    return newNames;
    */
};