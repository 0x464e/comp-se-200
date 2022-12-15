import filter from '../filter';


describe('filter', () => {
    it('should return an array of elements that pass the predicate test', () => {
        // Test that the function returns an array of elements that pass the predicate test
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
        ];
        const activeUsers = filter(users, ({active}) => active);
        expect(activeUsers).toEqual([
            {'user': 'barney', 'active': true},
        ]);

        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = filter(numbers, (num) => num % 2 === 0);
        expect(evenNumbers).toEqual([2, 4, 6]);
    });


    it('should return an empty array if no elements pass the predicate test', () => {
        // Test that the function returns an empty array if no elements pass the predicate test
        const users = [{'user': 'barney', 'active': true}, {'user': 'fred', 'active': false}];
        const inactiveUsers = filter(users, ({user}) => user === 'teuvvo');
        expect(inactiveUsers).toEqual([]);

        const numbers = [1, 2, 3, 4, 5, 6];
        const oddNumbers = filter(numbers, (num) => num % 2 === 7);
        expect(oddNumbers).toEqual([]);
    });

    it('should return an empty array if the input array is empty', () => {
        // Test that the function returns an empty array if the input array is empty
        expect(filter([], () => true)).toEqual([]);
        expect(filter([], () => false)).toEqual([]);
    });

    it('should throw an error if the input is not an array', () => {
        // Test that the function throws an error if the input is not an array
        expect(() => filter('hello', () => true)).toThrow();
        expect(() => filter(123, () => true)).toThrow();
        expect(() => filter(true, () => true)).toThrow();
    });

    it('should throw an error if the predicate is not a function', () => {
        // Test that the function throws an error if the predicate is not a function
        expect(() => filter([1, 2, 3], 'hello')).toThrow();
        expect(() => filter([1, 2, 3], 123)).toThrow();
        expect(() => filter([1, 2, 3], [])).toThrow();
    });

});
