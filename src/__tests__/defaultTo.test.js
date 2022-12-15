import defaultTo from "../defaultTo";

describe('defaultTo', () => {
    it('should return the value if it is not NaN, null, or undefined', () => {
        // Test that the function returns the value if it is not NaN, null, or undefined
        expect(defaultTo(1, 10)).toBe(1);
        expect(defaultTo('hello', 'world')).toBe('hello');
        expect(defaultTo([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
    });

    it('should return the default value if the value is NaN, null, or undefined', () => {
        // Test that the function returns the default value if the value is NaN, null, or undefined
        expect(defaultTo(null, 'world')).toBe('world');
        expect(defaultTo(undefined, [4, 5, 6])).toEqual([4, 5, 6]);
        expect(defaultTo(NaN, 10)).toBe(10);
    });
});