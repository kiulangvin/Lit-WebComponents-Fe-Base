// 导入所有组件，使其自动注册
import "@/components/index.ts";

// 框架初始化函数
export function initWebComponentsFramework(): void {
  console.log('Web Components Framework initialized');
  // 这里可以添加框架级别的初始化逻辑
  // 例如：主题设置、全局事件监听等
}

// 自动初始化框架
initWebComponentsFramework();
