import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // 钩子函数
  //routeChangeStart  路由开始发生变化的时候
  //routeChangeComplete  路由发生变化之后
  //beforeHistoryChange  history模式下路由发生变化
  //routeChangeError  路由变化发生错误
  // hashChangeStart 
  // hashChangeComplete


  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })
  
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由变化结束,参数为:',...args)
  })

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3.beforeHistoryChange->路由变化结束,参数为:',...args)
  })

  // 页面404不算路由错误，触发不了routeChangeError
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4.routeChangeError->路由发生错误,参数为:',...args)
  })

  Router.events.on('hashChangeStart',(...args)=>{
    console.log('4.hashChangeStart->路由变化结束,参数为:',...args)
  })

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('4.hashChangeComplete->路由变化结束,参数为:',...args)
  })

  function gotoXiaojiejie(){
    Router.push({
      pathname: '/Xiaojiejie',
      query: {
        name: 'yz'
      }
    })
    // Router.push('/Xiaojiejie?name=杨紫')
  }
  return (
    <div>
      <div>我是首页</div>
      <div>
        <Link href={{pathname:'/Xiaogege',query:{name: '最好的李现'}}}><a>李现</a></Link>
        <br />
        <Link href={{pathname:'/Xiaojiejie',query: {name: '杨紫'}}}><a>杨紫</a></Link>
        <div>
            <button onClick={gotoXiaojiejie}>选择杨紫</button>
        </div>
        <div>
          <Link href="#zhoujin"><a>zhoujin</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Home