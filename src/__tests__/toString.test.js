import toString from "../toString";

describe('toString()', () => {
    it('should convert the given value to a string', () => {
        expect(toString(-0)).toBe('-0');
        expect(toString([1, 2, 3])).toBe('1,2,3');
        expect(toString([])).toBe('');
        expect(toString(null)).toBe('');
    });

    it('should handle objects and arrays correctly', () => {
        expect(toString({a: 1, b: 2})).toBe('[object Object]');
        expect(toString(Symbol('foo'))).toBe('Symbol(foo)');
        expect(toString([1, 2, [3, 4]])).toBe('1,2,3,4');
        expect(toString([Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])).toBe('-Infinity,Infinity');
    });

    it('should handle unicode characters', () => {
        expect(toString('abc')).toBe('abc');
        expect(toString('😀')).toBe('😀');
        expect(toString('𐐷')).toBe('𐐷');
    });

    it('should handle large numbers and NaN correctly', () => {
        expect(toString(Number.MAX_SAFE_INTEGER)).toBe('9007199254740991');
        expect(toString(Number.MAX_VALUE)).toMatch(/^1.7976931348623157(e\+)?308$/);
        expect(toString(NaN)).toBe('NaN');
    });

});