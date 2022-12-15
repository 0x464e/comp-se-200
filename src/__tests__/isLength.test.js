import isLength from "../isLength";

describe('isLength', () => {
    it('should return true if the value is a valid array-like length', () => {
        expect(isLength(3)).toBe(true);
        expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('should return false if the value is not a valid array-like length', () => {
        expect(isLength(Number.MIN_VALUE)).toBe(false);
        expect(isLength(Infinity)).toBe(false);
        expect(isLength('3')).toBe(false);
    });
});
