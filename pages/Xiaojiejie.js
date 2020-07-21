import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Xiaojiejie = ({router,list}) => {
    return (
        <div>
            <div>我是演员{router.query.name}</div>
            <div>{list}</div>
            <Link href="/"><a>return</a></Link>
        </div>
    )
}

// 请求后端数据必须写在getInitialProps
Xiaojiejie.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5dad241db292245072d601f1/ReactDemo01_copy/getList').then((res) => {
            resolve(res.data.data)
        })
    })
    return await promise
}

export default withRouter(Xiaojiejie)