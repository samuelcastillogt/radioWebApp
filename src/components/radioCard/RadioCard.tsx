import './radioCard.css'

export const RaddioCard = (radioData:any) =>{
    return(
        <div className='radioCard'>
            <div className='radioCard__header'>
                <h3>{radioData.radioData.nombre}</h3>
            </div>
            <div className='radioCard__body'>
                
            </div>
        </div>
    )
}