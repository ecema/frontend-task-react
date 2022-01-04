import { isGoFirstButtonDisabled, isGoLastButtonDisabled } from './../EventList/EventListController';

test('it is true when active equals to 1', () => {
    expect(isGoFirstButtonDisabled(1)).toBe(true);
});

test('it is false when active equals to 3', () => {
    expect(isGoFirstButtonDisabled(3)).toBe(false);
});

test('it is false when active equals to 1 pageCount equals to 4', () => {
    expect(isGoLastButtonDisabled(1, 4)).toBe(false);
});

test('it is false when active equals to 2 pageCount equals to 4', () => {
    expect(isGoLastButtonDisabled(2, 4)).toBe(false);
});

test('it is true when active equals to 3 pageCount equals to 4', () => {
    expect(isGoLastButtonDisabled(3, 4)).toBe(true);
});

test('it is true when active equals to 4 pageCount equals to 4', () => {
    expect(isGoLastButtonDisabled(4, 4)).toBe(true);
});

test('it is true when active equals to 4 pageCount equals to 5', () => {
    expect(isGoLastButtonDisabled(4, 5)).toBe(true);
});