import eq from '../eq';

describe('eq', () => {
    it('should return true for equivalent values', () => {
        // Test that the function returns true for equivalent values
        expect(eq(1, 1)).toBe(true);
        expect(eq('hello', 'hello')).toBe(true);
        expect(eq([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('should return false for non-equivalent values', () => {
        // Test that the function returns false for non-equivalent values
        expect(eq(1, 2)).toBe(false);
        expect(eq('hello', 'world')).toBe(false);
        expect(eq([1, 2, 3], [4, 5, 6])).toBe(false);
    });

    it('should return false for different types of equivalent values', () => {
        // Test that the function returns false for different types of equivalent values
        expect(eq(1, '1')).toBe(false);
        expect(eq(0, false)).toBe(false);
        expect(eq(1, true)).toBe(false);
        expect(eq('', false)).toBe(false);
        expect(eq('0', false)).toBe(false);
    });

    it('should handle NaN correctly', () => {
        // Test that the function can handle NaN
        expect(eq(NaN, NaN)).toBe(true);
        expect(eq(NaN, 1)).toBe(false);
        expect(eq(1, NaN)).toBe(false);
    });

    it('should handle objects correctly', () => {
        // Test that the function can handle objects
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, object)).toBe(true);
        expect(eq(object, other)).toBe(false);
    });
});