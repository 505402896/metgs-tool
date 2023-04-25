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
        { text: 'Introduce', link: '/guide/introduction/' },
        { text: 'Get Started', link: '/guide/getting-started/' },
        {
          text: 'Functions',
          children: [
            { text: 'Color', link: '/function/color/' },
            { text: 'Time', link: '/function/time/' },
            { text: 'String', link: '/function/string/' },
            { text: 'Wind', link: '/function/wind/' },
          ],
        },
        {
          text: 'Hooks',
          children: [],
        },
        {
          text: 'Components',
          children: [],
        },
      ],
    },
  }),
})
