import React, { useCallback, useMemo, useState } from "react";

interface ListActions<T> {
  set: (list: T[]) => void;
  push: (item: T | T[]) => void;
  removeAt: (index: number) => void;
  insertAt: (index: number, item: T) => void;
  updateAt: (index: number, item: T) => void;
  clear: () => void;
  swap: (indexA: number, indexB: number) => void;
  move: (from: number, to: number) => void;
  concat: (otherList: T[]) => void;
}

interface ListFunctions<T> {
  find: (predicate: (item: T) => boolean) => T | undefined;
  findIndex: (predicate: (item: T) => boolean) => number;
  filter: (predicate: (item: T) => boolean) => T[];
  sort: (compareFn: (a: T, b: T) => number) => T[];
  groupBy: (groupByFn: (item: T) => any) => T[][];
  paginate: (pageSize: number) => (pageNumber: number) => T[];
  map: <U>(mapper: (item: T) => U) => U[];
  clone: () => T[];
  isEmpty: () => boolean;
  count: () => number;
}

const cloneList = <T>(list: T[]): T[] => JSON.parse(JSON.stringify(list));

/**
 * Custom React hook for managing a list of items with various actions.
 *
 * @param {T[]} initialList - The initial list of items.
 * @returns {[T[], ListActions<T>, ListFunctions<T>]} - A tuple containing the current list, actions to manipulate the list, and functions to modify the list.
 *
 * @example
 * // Using the useList hook to manage a list of strings
 * const [items, listActions, listFunctions] = useList<string>(["apple", "banana", "cherry"]);
 *
 * // Pushing a new item to the list
 * listActions.push("date");
 *
 * // Swapping items at positions 0 and 2
 * listActions.swap(0, 2);
 */
function useList<T>(
  initialList: T[] = []
): [T[], ListActions<T>, ListFunctions<T>] {
  const [list, setList] = useState<T[]>(initialList);

  const functions = useMemo<ListFunctions<T>>(
    () => ({
      find: (predicate: (item: T) => boolean) => list.find(predicate),
      findIndex: (predicate: (item: T) => boolean) => list.findIndex(predicate),
      filter: (predicate: (item: T) => boolean): T[] => list.filter(predicate),
      sort: (compareFn: (a: T, b: T) => number): T[] => list.sort(compareFn),
      groupBy: (groupByFn: (item: T) => any): T[][] => {
        const groups = new Map();
        for (const item of list) {
          const key = groupByFn(item);
          const group = groups.get(key) ?? [];
          group.push(item);
          groups.set(key, group);
        }
        return Array.from(groups.values());
      },
      paginate: useCallback(
        (pageSize: number) => {
          return (pageNumber: number) => {
            const start = pageNumber * pageSize;
            const end = Math.min(start + pageSize, list.length);
            return cloneList(list).slice(start, end);
          };
        },
        [list]
      ),
      map: <U>(mapper: (value: T, index: number, array: T[])=> U): U[] => list.map(mapper),
      clone: () => cloneList(list),
      isEmpty: () => list.length === 0,
      count: () => list.length,
    }),
    [list]
  );

  const actions = useMemo<ListActions<T>>(
    () => ({
      set: (newList: T[]) => setList(newList),
      push: (item: T | T[]) =>
        setList((prevList) => [
          ...prevList,
          ...(Array.isArray(item) ? item : [item]),
        ]),
      removeAt: (index: number) =>
        setList((prevList) => [
          ...prevList.slice(0, index),
          ...prevList.slice(index + 1),
        ]),
      insertAt: (index: number, item: T) =>
        setList((prevList) => [
          ...prevList.slice(0, index),
          item,
          ...prevList.slice(index),
        ]),
      updateAt: (index: number, item: T) =>
        setList((prevList) => [
          ...prevList.slice(0, index),
          item,
          ...prevList.slice(index + 1),
        ]),
      clear: () => setList([]),
      swap: (indexA: number, indexB: number) =>
        setList((prevList) => {
          const newList = cloneList(prevList);

          [newList[indexA], newList[indexB]] = [
            newList[indexB],
            newList[indexA],
          ];
          return newList;
        }),
      move: (from: number, to: number) =>
        setList((prevList) => {
          const item = prevList.splice(from, 1)[0];
          prevList.splice(to, 0, item);
          return prevList;
        }),
      concat: (otherList: T[]) =>
        setList((prevList) => [...prevList, ...otherList]),
    }),
    [setList]
  );

  return [list, actions, functions];
}

export { useList };
export type { ListActions, ListFunctions };
