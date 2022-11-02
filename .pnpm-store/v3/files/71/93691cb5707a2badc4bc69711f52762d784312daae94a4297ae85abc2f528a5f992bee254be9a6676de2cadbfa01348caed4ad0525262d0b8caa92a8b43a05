declare type MapArgs<FromValue, ToValue> = {
    source: FromValue[];
    map: (item: FromValue, index: number, list: FromValue[]) => Promise<ToValue>;
};
export declare function asyncMap<FromValue, ToValue>({ source, map, }: MapArgs<FromValue, ToValue>): Promise<ToValue[]>;
declare type ForArgs = {
    count: number;
    fn: (index: number) => Promise<void>;
};
export declare function asyncFor({ count, fn }: ForArgs): Promise<void>;
export {};
