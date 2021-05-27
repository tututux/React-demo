#### 关于MobX的浏览器支持：

- MobX 6的改进可能是它比MobX 5支持*更多的*JavaScript引擎。MobX 5需要代理支持，这使MobX不适合Internet Explorer或React Native（取决于引擎）。因此，仍积极维护MobX 4。但是，MobX 6会一次替换。

- MobX >=5 版本运行在任何[支持 ES6 proxy](https://kangax.github.io/compat-table/es6/#test-Proxy) 的浏览器。如果运行在像 IE11、Node.js 6 以下版本或依靠与较旧的 JavaScripCore 的安卓端的 React Native ([点击查看如何升级\]](https://github.com/react-community/jsc-android-buildscripts#how-to-use-it-with-my-react-native-app))。

- MobX 4 可以运行在任何支持 ES5 的浏览器上，而且也将进行持续地维护。MobX 4 和 5 的 API 是相同的，并且语义上也能达到相同的效果，只是 MobX 4 存在一些 [局限性](https://cn.mobx.js.org/#mobx-4-vs-mobx-5)。

  小贴士：MobX 5 包的主入口点附带 ES5 代码，以便向后兼容所有构建工具。但因为 MobX 5 只能运行在现代浏览器上，所以可以考虑使用速度最快、体积最小的 ES6 构建: `lib/mobx.es6.js` 。例如，通过设置 webpack 的别名: `resolve: { alias: { mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js" }}`

  小贴士：在现代浏览器/移动端浏览器 上推荐使用 MobX >=5 版本；需要兼容ie时使用MobX4。

#### MobX 4 的重要局限性：

- Observable 数组并非真正的数组，所以它们无法通过 `Array.isArray()` 的检查。最常见的处理方法是在传递给第三方库之前，你经常需要先对其进行 `.slice()` 操作，从而得到一个浅拷贝的真正数组。
- 向一个已存在的 observable 对象中添加属性不会被自动捕获。要么使用 observable 映射来替代，要么使用[工具函数](https://cn.mobx.js.org/refguide/object-api.html) 中方法来对想要动态添加属性的对象进行读/写/迭代。

#### 关于MobX 6的代理：

MobX 6 的代理是可选的，仍将需要代理，但是如果您需要支持较旧的引擎，则可以退出代理使用。

```
// index.tsx 项目入口
import { configure } from "mobx"

// 关闭MobX 6 的代理 以便兼容旧的引擎（浏览器）
configure({
    // default: "always"
    // use "ifavailable" to use Proxy in modern envs only,
    // and get DEV warnings about things that won't work in IE!
    useProxies: "never"
})
```

#### MobX 的用法：

MobX 6以前的用法：

```
import { observable, action } from "mobx"

class TodoStore {
    @observable todos: Todo[] = []

    @action addTodo(todo: Todo) {
        this.todos.push(todo)
    }
}
```

MobX 6的用法：

```
import { makeAutoObservable } from "mobx"

class TodoStore {
    _todos: Todo[] = []

    /// 实例化 => 对 store 数据元素监听
    constructor() {
        makeAutoObservable(this)
    }

    /// 对数组做下 mobx toJS 转换 (非数组不需要)
    get todos() {
        return toJS(this._todos);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
}
```

