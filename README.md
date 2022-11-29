### Stack
- Next.js
- TypeScript
- SASS

### 目录结构

```
.
|____app # 页面
|____components # 通用组件
|____data # 数据类和工具类
|____public # 静态图标、图片、文件
| |____asste # 网站呈现数据的静态资源 
|____style # CSS 主题
```

### 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 

### 编译

```
next build
```
### 部署

编译后会生成 `.next` 文件夹，将生成的`.next`放入一个空文件夹中比如 website，最后的目录结构应该是 `website\.next`

```
cd website
npm install next react react-dom
next start
```