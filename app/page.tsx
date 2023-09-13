import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
dayjs.locale("zh-cn");
const serverConfig = getServerSideConfig();
export default async function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </ConfigProvider>
  );
}
