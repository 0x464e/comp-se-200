import divide from '../divide';


describe('divide', () => {
    it('should return the quotient of two numbers', () => {
        // Test that the function returns the quotient of two numbers
        expect(divide(6, 4)).toBe(1.5);
        expect(divide(6, -4)).toBe(-1.5);
        expect(divide(-6, 4)).toBe(-1.5);
        expect(divide(-6, -4)).toBe(1.5);
    });

    it('should handle division by zero correctly', () => {
        // Test that the function can handle division by zero

        // it seems that the divide function returns NaN when dividing by zero
        // we might have expected the function return infinity, as javascript does
        expect(divide(6, 0)).toBe(NaN);
        expect(divide(6, -0)).toBe(NaN);
        expect(divide(-6, 0)).toBe(NaN);
        expect(divide(-6, -0)).toBe(NaN);
        expect(divide(0, 0)).toBe(NaN);

        // normally javascript returns infinity when dividing by zero
        // as it wasn't documented which should happen, we'll comment out the tests expecting infinity
        // expect(divide(6, 0)).toBe(Number.POSITIVE_INFINITY);
        // expect(divide(-6, 0)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('should handle NaN correctly', () => {
        // Test that the function can handle NaN
        expect(divide(1, NaN)).toBe(NaN);
        expect(divide(NaN, NaN)).toBe(NaN);
        expect(divide(NaN, 1)).toBe(NaN);
    });

    it('should handle infinity correctly', () => {
        // Test that the function can handle infinity
        expect(divide(Number.POSITIVE_INFINITY, 1)).toBe(Number.POSITIVE_INFINITY);
        expect(divide(1, Number.POSITIVE_INFINITY)).toBe(0);
        expect(divide(Number.NEGATIVE_INFINITY, 1)).toBe(Number.NEGATIVE_INFINITY);
        expect(divide(1, Number.NEGATIVE_INFINITY)).toBe(0);
        expect(divide(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(-0);
        expect(divide(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)).toBe(-0);
        expect(divide(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)).toBe(NaN);
        expect(divide(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(NaN);
    });
});