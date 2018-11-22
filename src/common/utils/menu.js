export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  },{
    name: '画廊模块',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: '时光相片', url: 'album' },
      { name: '瀑布流', url: 'waterfall' },
    ],
  }]