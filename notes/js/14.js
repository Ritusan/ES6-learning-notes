// 模块内部声明的变量在模块内部是有用的，是模块内部私有的，不能在模块外部使用
// 一旦使用模块，默认延迟加载（默认在script标签上添加defer）
// 相同模块导入多次，只会加载一次

// export default 只能默认导出一次 
// export:导出
// import:导入

// 可以用as为导出或导入的值重新命名
// import * :全部导入
// 写在{ }里面的是指定导出的值，可以用as为指定导出的值取一个别名；没有用花括号包的是默认导出的值

// 可以只导入一个模块