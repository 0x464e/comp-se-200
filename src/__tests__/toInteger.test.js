import toInteger from "../toInteger";

describe('toInteger', () => {
    it('should convert the given value to an integer', () => {
        expect(toInteger(3.2)).toBe(3);
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
        expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
        expect(toInteger('3.2')).toBe(3);
    });

    it('should handle zero values correctly', () => {
        expect(toInteger(-0)).toBe(-0);
        expect(toInteger(0)).toBe(0);
        expect(toInteger(-0.0)).toBe(-0);
        expect(toInteger(0.0)).toBe(0);
        expect(toInteger(0n)).toBe(0);
    });

    it('should handle boolean values correctly', () => {
        expect(toInteger(false)).toBe(0);
        expect(toInteger(true)).toBe(1);
    });

    it('should return 0 for null', () => {
        // according to the ECMA spec
        expect(toInteger(null)).toBe(0);
    });

    it('should work for binary values', () => {
        expect(toInteger('0b11111111')).toBe(255);
    });

    it('should work for octal values', () => {
        expect(toInteger('0o377')).toBe(255);
    });

    it('should work for hexadecimal values', () => {
        expect(toInteger('0xFF')).toBe(255);
        // should return zero for invalid signed hex values
        expect(toInteger('+0xFF')).toBe(0);
    });

    it('should return NaN for undefined', () => {
        // according to the ECMA spec
        expect(toInteger(undefined)).toBe(NaN);
    });

    it('should throw a TypeError for symbols', () => {
        // according to the ECMA spec
        expect(() => toInteger(Symbol('cat'))).toThrow(TypeError);
    });

    it('should throw a TypeError for empty objects', () => {
        // according to the ECMA spec
        expect(() => toInteger({})).toThrow(TypeError);
        expect(() => toInteger(Object())).toThrow(TypeError);
    });

    it('should throw a TypeError for non-empty objects', () => {
        expect(() => toInteger({valueOf: 1})).toThrow(TypeError);
        expect(() => toInteger(Object("cat"))).toThrow(TypeError);
    });

    it('koira', () => {
        expect(() => toInteger({valueOf: () => 1})).toThrow(TypeError);
    });

    it('should handle bigints', () => {
        expect(toInteger(1n)).toBe(1);
        expect(toInteger(-1n)).toBe(-1);
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