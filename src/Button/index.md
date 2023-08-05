# Button

按钮组件用于触发一个操作。

这是每一个组件库都有的组件，也是产品的重要组成部分。它虽然小，却体现出了组件库整体的设计思想与设计风格。

在 Forest Design 中，我们提供了四种按钮类型：

- 主按钮（primary）
- 次按钮（secondary）
- 危险按钮（danger）
- 成功按钮（success）

```jsx
import { Button } from 'forest-design';
export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="secondary">Secondary Button</Button>
    <Button type="danger">Danger Button</Button>
    <Button type="success">Success Button</Button>
  </>
);
```
