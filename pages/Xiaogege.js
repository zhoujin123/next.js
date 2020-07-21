import Link from 'next/link'
import {withRouter} from 'next/router'
export default withRouter(({router}) => {
    return (
        <div>
            <span>我是{router.query.name}</span>
            <br />
            <Link href="/"><a>return</a></Link>
        </div>
    )
})
