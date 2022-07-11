import { ContainerEvent } from "./style";

import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ModalEditUserProfile } from "../../Component/ModalEditUserProfile";
import api from "../../Services";
import { FormsEvent } from "../../Component/FormsEvent";

export const EventsPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const id = localStorage.getItem("@churraskenzie:userId");
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => "Erro de conexão.");
  }, []);

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

  return (
    <>
      <Header />
      <ContainerEvent>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <ModalEditUserProfile
            id={id}
            token={token}
            user={user}
            handleCloseModal={handleCloseModal}
            setUser={setUser}
          />
        </Modal>
        <div className="bodyEventPage">
          <FormsEvent />
        </div>
        <div className="infoProfile">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-9BhAquXWRan3TnaL_ndnjAG0pXWkbxCkg&usqp=CAU"
              alt="foto do usuário"
            />
            <div className="profileInfo">
              <h3>Meu perfil</h3>
              <p>Nome: {user.name}</p>
              <p>Cidade: {user.city}</p>
              <p>Estado: {user.state}</p>
              <p>Contato: {user.contact}</p>

              <button onClick={handleOpenModal}>Editar perfil</button>
            </div>
          </div>
          <div className="events">
            <p>Eventos</p>
          </div>
        </div>
      </ContainerEvent>
      <Footer />
    </>
  );
};
