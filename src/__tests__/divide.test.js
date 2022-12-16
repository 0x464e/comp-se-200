import divide from '../divide';


describe('divide', () => {
    it('should divide two numbers that go evenly into each other', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(10, 2)).toBe(5);
        expect(divide(100, 10)).toBe(10);
    });


    it('should return the fractional quotients correctly', () => {
        expect(divide(6, 4)).toBeCloseTo(1.5);
        expect(divide(10, -3)).toBeCloseTo(-3.333333333333333);
        expect(divide(-7, 2)).toBeCloseTo(-3.5);
        expect(divide(-6, -4)).toBeCloseTo(1.5);
    });

    it('should handle division by zero correctly', () => {
        expect(divide(6, 0)).toBe(Number.POSITIVE_INFINITY);
        expect(divide(6, -0)).toBe(Number.NEGATIVE_INFINITY);
        expect(divide(-6, 0)).toBe(Number.NEGATIVE_INFINITY);
        expect(divide(-6, -0)).toBe(Number.POSITIVE_INFINITY);
        expect(divide(0, 0)).toBe(NaN);
    });

    it('should handle NaN correctly', () => {
        // Test that the function can handle NaN
        expect(divide(1, NaN)).toBe(NaN);
        expect(divide(NaN, NaN)).toBe(NaN);
        expect(divide(NaN, 1)).toBe(NaN);
    });

    it('should throw an error for objects', () => {
        expect(() => divide({}, {})).toThrow();
        expect(() => divide({}, 1)).toThrow();
        expect(() => divide(1, {})).toThrow();
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