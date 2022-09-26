// parse 函数 主函数
export default function (templateStr) {
  // 指针
  let i = 0;
  // 存放标签
  let stack1 = [];
  // 存放 内容
  let stack2 = [];

  while (i < templateStr.length - 4) {
    let res = templateStr.substring(i);
    if (/^<\w+>/.test(res)) {
      let tag = res.match(/^<(\w+)>/)[1];
      stack1.push(tag);
      stack2.push([tag]);
      i += tag.length + 1;
    } else if (/^>.+</.test(res)) {
      let content = res.match(/^>(.+)<\//)[1];
      stack2[stack2.length - 1][1] = [content];

      i += content.length + 1;
    } else if (res.startsWith(`</${stack1[stack1.length - 1]}>`)) {
      let tag = stack1.pop();
      let children = stack2.pop();
      console.log(children);
      if (
        stack2[stack2.length - 1][1] &&
        Array.isArray(stack2[stack2.length - 1][1])
      ) {
        stack2[stack2.length - 1][1].push(children);
      } else {
        stack2[stack2.length - 1].push([children]);
      }

      i += tag.length + 2;
    } else {
      i++;
    }

    console.log(stack1, stack2);
  }
  return templateStr;
}
