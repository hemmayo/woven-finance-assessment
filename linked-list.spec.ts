import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  let list;

  beforeAll(() => {
    list = new LinkedList();
  });

  it("should return null initially", () => {
    expect(list.head).toBeNull();
  });

  it("should insert correctly", () => {
    list.insert(2);
    list.insert(5);
    list.insert(8);

    expect(list.head.value).toBe(2);
    expect(list.head.next.value).toBe(5);
    expect(list.head.next.next.value).toBe(8);
    expect(list.head.next.next.next).toBeNull();
  });

  it("should return the correct preceding value", () => {
    expect(list.getPrecedingValue(2)).toBe(5);
  });
});
