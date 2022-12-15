import ceil from "../ceil.js"


describe('ceil', () => {
    it('should round up to the nearest integer', () => {
        // Test that the function returns the expected result when passed a number without a precision argument
        expect(ceil(4.006)).toBe(5);
        expect(ceil(4.4)).toBe(5);
        expect(ceil(4.5)).toBe(5);
    });

    it('should round up to the specified precision', () => {
        // Test that the function returns the expected result when passed a number and a precision argument
        expect(ceil(6.004, 2)).toBe(6.01);
        expect(ceil(6040, -2)).toBe(6100);
        expect(ceil(5.12345, 4)).toBe(5.1235);
    });

    it('should handle a larger precision argument', () => {
        // Test that the function returns the expected result when passed a number and a larger precision argument
        expect(ceil(5.12345, 6)).toBe(5.12345);
        expect(ceil(5.12345, 10)).toBe(5.12345);
        expect(ceil(5.1, -1)).toBe(10);
        expect(ceil(5.1, -2)).toBe(10);
        expect(ceil(5.1, -10)).toBe(10);
    });


    it('should throw an error if the number is not a number', () => {
        // Test that the function throws an error when the number is not a number
        expect(() => ceil('cat')).toThrow();
        expect(() => ceil([])).toThrow();
        expect(() => ceil(true)).toThrow();
    });

    it('should throw an error if the precision is not an integer', () => {
        // Test that the function throws an error when the precision is not an integer
        expect(() => ceil(4.006, 0.5)).toThrow();
        expect(() => ceil(4.006, 1.5)).toThrow();
        expect(() => ceil(4.006, 2.5)).toThrow();
    });

    it('should handle large numbers correctly', () => {
        // Test that the function can handle large numbers
        expect(ceil(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
        expect(ceil(Number.MAX_VALUE, -1)).toBe(Number.MAX_VALUE);
        expect(ceil(Number.MAX_VALUE, -2)).toBe(Number.MAX_VALUE);
    });

    it('should handle positive and negative infinity correctly', () => {
        // Test that the function can handle positive and negative infinity
        expect(ceil(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY);
        expect(ceil(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('should handle NaN correctly', () => {
        // Test that the function can handle NaN
        expect(ceil(NaN)).toBe(NaN);
        expect(ceil(NaN, 0)).toBe(NaN);
        expect(ceil(NaN, -1)).toBe(NaN);
    });



});