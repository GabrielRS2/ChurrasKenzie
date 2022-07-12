import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { Container } from "./style";
import api from "../../Services";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/User";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { ModalEditCombo } from "../ModalEditCombo/index";

export const ComboListItem = ({ combo }) => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  function deleteCombo() {
    api
      .delete(`/combos/${combo.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        toast.success("Combo deletado com sucesso!");
      })
      .catch((error) => {
        toast.error("Falha ao deletar combo!");
      });
  }
  
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalEditCombo handleCloseModal={handleCloseModal} combo={combo} />
      </Modal>
      <img src={combo.img} alt="combo image"/>
      <p>{combo.combo}</p>
      <p>R${combo.price}</p>
      
      <div className="buttonsComboCard">
      <button onClick={handleOpenModal}>
        <FaEdit />
      </button>
      <button onClick={deleteCombo}>
        <BsTrash />
      </button>
      </div>
    </Container>
  );
};
