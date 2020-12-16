import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import useEventHandler from '@hooks/useEventHandler';

interface IModalProps {
  visible: boolean;
}

function Modal() {
  const router = useRouter();
  const randomNum = Math.floor(Math.random() * 2);
  // 50퍼센트의 확률로 모달 등장
  const [isModalOpened, setIsModalOpened] = useState(randomNum === 1);
  const modalCloseEvent = () => {
    setIsModalOpened(false);
  };

  const logData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: {
        page: router.pathname,
        target,
      },
    };
  };

  return (
    <ModalWrapper visible={isModalOpened} className="modal hidden">
      <ModalOverLay>
        <ModalContent>
          <ModalCloseButton onClick={useEventHandler(modalCloseEvent, logData('ModalCloseBtn'))} />
          <Image src="/images/modal-img.png" alt="modal-img" width={450} height={550} />
          <MembershipButton
            onClick={useEventHandler(modalCloseEvent, logData('ModalMembershipBtn'))}
          />
        </ModalContent>
      </ModalOverLay>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div<IModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalOverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 70;
`;

const ModalContent = styled.div`
  width: 450px;
  height: 550px;
  background-color: white;
  text-align: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 50px auto;
  z-index: 90;
  overflow: hidden;
`;

const ModalCloseButton = styled.button`
  width: 45px;
  height: 45px;
  // border: 2px solid gold;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 100;
`;

const MembershipButton = styled.button`
  width: 370px;
  height: 65px;
  // border: 2px solid gold;
  position: absolute;
  bottom: 43px;
  left: 40px;
  z-index: 100;
`;

export default Modal;
