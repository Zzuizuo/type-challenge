// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here ============= //

// * ts 联合类型 union
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}






// ! js  对比学习法
function MyPick(todo: any, keys: any) {
  let obj: any = {}

  keys.forEach((key: any) => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  });

  return obj
}

// ! 知识点
// * 1 返回一个对象
// * 2 遍历foreach   mappad  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// * 3 todo[key]  取值 indexed  https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// * 4 key是否在todo中
// * a)keyof lookup https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
// * extends 约束
