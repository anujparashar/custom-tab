import { Type } from "@angular/core";

export type Spied<T> = {
    [Method in keyof T]: jasmine.Spy;
};

export function createSpyFromClass<T>(spiedClass: Type<T>): Spied<T> {
    const methods = getMethods(spiedClass);
    return jasmine.createSpyObj('spy', [...methods]);
}

// export function resetAllCallsFromSpy<T>(spiedInstance: Spied<T>, spiedClass: Type<T>): void {
//     const methods = getMethods(spiedClass);
//     methods.forEach(methodName => {
//         spiedInstance[methodName.toString()].calls.reset();
//     })
// }

function getMethods<T>(spiedClass: Type<T>) {
    const prototype = spiedClass.prototype;

    return Object.getOwnPropertyNames(prototype)
        .map(name => [name, Object.getOwnPropertyDescriptor(prototype, name)])
        .filter(([name, descriptor]) => {
            return (descriptor as PropertyDescriptor).value instanceof Function;
        })
        .map(([name]) => name)
}
