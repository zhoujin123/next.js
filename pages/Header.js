import MyHeader from '../components/MyHeader'
import '../public/text.css'
import {Button} from 'antd'

function Header(){
    return (
        <div>
            <MyHeader />
            <div>lixian.com</div>
            <div>
                <Button>我爱李现</Button>
            </div>
        </div>
    )
}

export default Header