// test ../src/add.js file with jest
import add from "../add.js";


describe("add", () => {
    it('should add two numbers', () => {
        // Test that the function returns the expected result when passed two numbers
        expect(add(2, 3)).toBe(5);
        expect(add(4, -2)).toBe(2);
        expect(add(0, 0)).toBe(0);
        expect(add(0, 1)).toBe(1);
        expect(add(1, 0)).toBe(1);
        // try negative numbers
        expect(add(-1, 0)).toBe(-1);
        expect(add(0, -1)).toBe(-1);
        expect(add(-1, -1)).toBe(-2);
        // try larger numbers
        expect(add(100, 100)).toBe(200);
        expect(add(100, -100)).toBe(0);
        expect(add(-100, 100)).toBe(0);
        expect(add(-100, -100)).toBe(-200);
    });

    it('should handle decimal numbers correctly', () => {
        // Test that the function can handle decimal numbers
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
        expect(add(0.5, 0.5)).toBeCloseTo(1, 10);
        expect(add(1.2345, 6.7890)).toBeCloseTo(8.0235, 4);
    });

    it('should handle fractional numbers correctly', () => {
        // Test that the function can handle fractional numbers
        expect(add(1 / 3, 2 / 3)).toBeCloseTo(1, 10);
        expect(add(1 / 7, 3 / 7)).toBeCloseTo(4 / 7, 10);
        expect(add(2 / 5, 3 / 5)).toBeCloseTo(5 / 5, 10);
    });

    // Test that the function can handle large non-infinite numbers
    it('should handle large non-infinite numbers correctly', () => {
        expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
        expect(add(Number.MAX_SAFE_INTEGER, -1)).toBe(Number.MAX_SAFE_INTEGER - 1);
        expect(add(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER * 2);
    });

    it('should throw an error if the arguments are not numbers', () => {
        expect(() => add('cat', 'dog')).toThrow();
        expect(() => add(1, 'dog')).toThrow();
        expect(() => add('cat', 2)).toThrow();
        expect(() => add([], {'hello': 'world'})).toThrow();
    });

    it('should handle NaN', () => {
        expect(add(NaN, 1)).toBe(NaN);
        expect(add(1, NaN)).toBe(NaN);
        expect(add(NaN, NaN)).toBe(NaN);
    })

    it('should handle Infinity and -Infinity', () => {
        expect(add(Infinity, 1)).toBe(Infinity);
        expect(add(1, Infinity)).toBe(Infinity);
        expect(add(Infinity, Infinity)).toBe(Infinity);

        expect(add(-Infinity, 1)).toBe(-Infinity);
        expect(add(1, -Infinity)).toBe(-Infinity);
        expect(add(-Infinity, -Infinity)).toBe(-Infinity);
    })


})
