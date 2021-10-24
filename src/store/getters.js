
const getters = {
  sidebar: (state) => state.app.sidebar,
  name: (state) => state.user.name,
  avatar: (state) => state.user.avatar,
  token:(state)=>state.user.token,
  id:(state)=>state.user.id,

  // 添加菜单相关的状态
  // init:(state)=>state.menu.init,
  // menuList:(state)=>state.menu.menuList,
  // buttonList:(state)=>state.menu.buttonList

  // 添加菜单相关的状态
  routers:(state)=>state.routers.init,


};

export default getters;
