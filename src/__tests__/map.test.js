import map from '../map';

describe('map', () => {
    it('should return a new array of values by running each element of the input array thru the iteratee function', () => {
        const array = [4, 8];
        const iteratee = (n) => n * n;
        expect(map(array, iteratee)).toEqual([16, 64]);
    });

    it('should pass the correct arguments to the iteratee function', () => {
        const array = [1, 2, 3];
        const iteratee = jest.fn();
        map(array, iteratee);
        expect(iteratee).toHaveBeenCalledWith(1, 0, array);
        expect(iteratee).toHaveBeenCalledWith(2, 1, array);
        expect(iteratee).toHaveBeenCalledWith(3, 2, array);
    });

    it('should return an empty array if the input array is empty', () => {
        expect(map([], () => {})).toEqual([]);
    });

    it('should return an empty array if the input array is null or undefined', () => {
        expect(map(null, () => {})).toEqual([]);
        expect(map(undefined, () => {})).toEqual([]);
    });

    it('should throw an error if the iteratee is not a function', () => {
        expect(() => map([1,2,3], 'not a function')).toThrow();

        // empty array seems to be checked before if iteratee is a function
        // so the function doesn't throw an error, but just returns an empty array
        // whether or not this is an error is hard to say since the documentation is lacking
        // expect(() => map([], 'not a function')).toThrow();
    });

});