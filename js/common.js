// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

// 每个页面都会导入该js 统一的设置写这里即可

const myToast=new bootstrap.Toast(document.querySelector('#myToast'),{delay:2000,})
      function tip(msg){
        document.querySelector('#myToast .toast-body').innerHTML=msg
        myToast.show()
     }

axios.defaults.baseURL = 'http://ajax-api.itheima.net'

// 设置用户名
const username = localStorage.getItem('username')
// 判断 是否存在 span 存在 设置
const nameSpan = document.querySelector('#navbar-main .font-weight-bold')
/* if (nameSpan) {
  nameSpan.innerHTML = username
} */
nameSpan&& (nameSpan.innerHTML = username)
const logoutBtn = document.querySelector('#logout')

logoutBtn&&(logoutBtn.onclick=function(){
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  window.location.assign('./login.html')
})
