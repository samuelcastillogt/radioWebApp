import useStore from '../../store/states/radios'
import { IoIosCloseCircle } from "react-icons/io";
import './modal.css'

export const Modal = () => {
    const { radioSelected, closeRadioSelected } = useStore()
    return (
        <div className='modal'>
            {
                radioSelected && (
                    <div className='modal__content'>
                        <div>
                            <IoIosCloseCircle onClick={() => closeRadioSelected()} />
                        </div>
                        <h2>{radioSelected.nombre}</h2>
                        <img src={radioSelected.imagen} alt="" />
                        <p>{radioSelected.categoria}</p>
                        <audio src={radioSelected.url} controls>
                        </audio>
                    </div>
                )
            }
        </div>
    )
}