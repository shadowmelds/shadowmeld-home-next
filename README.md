### 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 

### Stack
- Next.js
- TypeScript
- SASS

### 编译

```
next build
```
### 部署

会生成 `.next` 文件夹，将他放入一个空文件夹中比如 website，最后的目录结构应该是 `website\.next`

```
cd website
npm install next react react-dom
next start
```