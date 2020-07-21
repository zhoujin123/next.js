import react, {useState} from 'react'

function Lixian(){
    const [color,setColor] = useState('blue')
    const changeColor = () => {
        console.log(color)
        setColor(color == 'blue' ? 'red' : 'blue')
    }
    return (
        <div>
            <div className="lixian">李现的热剧"亲爱的，热爱的"</div>
            <button onClick={changeColor}>lixian</button>
            <style jsx>
                {`
                    .lixian{color: ${color};}
                `}
            </style>
        </div>
    )
}

export default Lixian