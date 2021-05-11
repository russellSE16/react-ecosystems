import { expect } from "chai";
import { getBorderStyle } from "../TodoListItem";

describe('getBorderStyle', () => {
    it('Returns "none" when date is less than 2 days ago', () => {
        const date = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 1);

        const expected = 'none';
        const actual = getBorderStyle(recentDate, date);

        expect(actual).to.equal(expected);
    });
    it('Returns a red border when date is more than 2 days ago', () => {
        const date = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 4);

        const expected = '2px solid red';
        const actual = getBorderStyle(recentDate, date);

        expect(actual).to.equal(expected);
    });
});