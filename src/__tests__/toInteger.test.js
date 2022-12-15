import toInteger from "../toInteger";

describe('toInteger', () => {
    it('should convert the given value to an integer', () => {
        expect(toInteger(3.2)).toBe(3);
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
        expect(toInteger('3.2')).toBe(3);
    });

    it('should return 0 for null', () => {
        // according to the ECMA spec
        expect(toInteger(null)).toBe(0);
    });

    it('should return NaN for undefined', () => {
        // according to the ECMA spec
        expect(toInteger(undefined)).toBe(NaN);
    });

    it('should throw a TypeError for non-numeric values', () => {
        // according to the ECMA spec
        expect(() => toInteger('dog')).toThrow(TypeError);
        expect(() => toInteger(Symbol('cat'))).toThrow(TypeError);
    });

    it('should implicitly round down numbers', () => {
        expect(toInteger(3.5)).toBe(3);
        expect(toInteger('3.6')).toBe(3);
        expect(toInteger(-3.5)).toBe(-3);
        expect(toInteger('-3.6')).toBe(-3);
    });

    it('should return the same value for integers', () => {
        expect(toInteger(3)).toBe(3);
        expect(toInteger(-3)).toBe(-3);
    });

});