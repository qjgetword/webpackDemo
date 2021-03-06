import React from "react";

// 使用 function 定义普通的无状态组件
// 子组件
function CmtItem(props) {
  return (
    <div>
      <h1>评论人：{props.user}</h1>
      <h2>评论内容：{props.content}</h2>
      <hr />
    </div>
  );
}

// 定义父组件
class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [
        // 评论列表数据
        { id: 0, user: "张三", content: "哈哈，我是第一名" },
        { id: 1, user: "李四", content: "哈哈，我爱吃西瓜" },
        { id: 2, user: "王五", content: "哈哈，我是大帅哥" },
        { id: 3, user: "周六", content: "哈哈，这姑娘一点也不傻" },
        { id: 4, user: "田七", content: "哈哈，我#@#￥" },
        { id: 5, user: "方八", content: "哈哈，￥#%@#￥……" },
        { id: 6, user: "吴氏", content: "哈哈，不知道说什么嘛" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>这里是评论列表区</h1>
        {this.state.commentList.map((item) => (
          <CmtItem key={item.id} {...item}></CmtItem>
        ))}
      </div>
    );
  }
}

export default CmtList;
