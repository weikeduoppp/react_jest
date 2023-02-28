// 
// Object.defineProperty(global, 'localStorage', {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {}
//     }
//   },
//   configurable: true,
//   // writable 是否可以set
// })

import 'jest-location-mock';

// 方法1.
// jest.spyOn(console, 'log').mockReturnValue();
// jest.spyOn(console, 'info').mockReturnValue();
// jest.spyOn(console, 'warn').mockReturnValue();
// jest.spyOn(console, 'error').mockReturnValue();

// 方法2. 清理log
// import mockConsole from "jest-mock-console";

// mockConsole()