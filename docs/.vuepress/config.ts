/*
 * @Author: wzj@metgs.com
 * @Date: 2023-04-11 17:34:50
 * @LastEditors: wzj@metgs.com
 * @LastEditTime: 2023-04-12 17:48:49
 * @Description: ...
 */
import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/metgs-tool/docs/',
  title: 'MetGS-Tool',
  description: '业务常用工具库',
  theme: defaultTheme({
    navbar: [{ text: '首页', link: '/guide/introduction/' }],
    sidebar: {
      '/': [
        { text: '简介', link: '/guide/introduction/' },
        { text: '快速上手', link: '/guide/getting-started/' },
        {
          text: '函数',
          children: [
            { text: '颜色', link: '/function/color/' },
            { text: '时间', link: '/function/time/' },
            { text: '字符串', link: '/function/string/' },
            { text: '风', link: '/function/wind/' },
          ],
        },
      ],
    },
  }),
})
