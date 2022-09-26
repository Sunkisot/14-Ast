import parse from './parse.js'
const templateStr = `
  <div>
    <h1>你好</h1>
    <ul>
      <li>A</li>
      <li>b</li>
      <li>c</li>
    </ul>
    <div>结束</div>
  </div>
`

const ast = parse(templateStr)

console.log(ast)