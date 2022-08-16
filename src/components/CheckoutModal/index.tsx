import React from 'react';

type Props = {
  children: any;
};

const ModalContext = React.createContext({});

export { ModalContext };
const CheckoutModal = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const showModal = (successState: boolean, message: string) => {
    setSuccess(successState);
    setMessage(message);
    setIsOpen(true);
  };
  return (
    <ModalContext.Provider value={{ showModal }}>
      {props.children}
      <div
        style={{
          height: '100%',
          width: '100%',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'rgba(0,0,0,0.5)',
          position: 'fixed',
          zIndex: 100,
          top: 0,
          left: 0,
        }}
      >
        <div style={{ width: 320, background: 'white', padding: '10px 10px' }}>
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{ borderRadius: 100, border: 'none', background: 'none' }}
            >
              x
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3>Order {success ? 'Success' : 'Failed'}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
    // <div>index</div>
  );
};

export default CheckoutModal;
