
import { Link } from "react-router-dom";
import { LoginModalCss } from "../style/ModalCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

 const LoginModal = ({ loginShowModal, setLoginShowModal }) => {
    return(
        <LoginModalCss>
            <div className="login-modal">
            <FontAwesomeIcon icon={faXmark}  className="close-icon" onClick={() => setLoginShowModal(false)  }/> 
            <div className="modal-content">
            <h4>로그인이 필요한 서비스입니다.<br/>로그인 하시겠습니까?</h4>
            <div className="modal-buttons">
                <input  type='button' value='아니오' onClick={() => setLoginShowModal(!loginShowModal)}/>
                <Link to={'/login'}>
                    <input  type='button' value='예' />
                </Link>
            </div>
            </div>
            </div>
        </LoginModalCss>
    )
}
export default LoginModal