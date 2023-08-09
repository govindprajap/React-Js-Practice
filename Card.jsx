const Card = (props)=>{
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src = {props.imgsrc} alt = "myPic" className="Card_img"/>
                <div className="card_info">
                    <span className="Card_category">{props.card_infor}</span>
                    <h1 className="card_title">{props.titel}</h1>
                    <a href = "https://netflix.com" target = "_blanck">
                        <button>{props.button}</button>
                    </a>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default Card;