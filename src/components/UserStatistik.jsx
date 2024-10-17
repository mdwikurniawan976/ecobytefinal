import React, { useEffect, useState } from 'react';
import userImage from '../assets/user.png';

const UserStatistik = ({ State, setState }) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);

  // State untuk menyimpan nama
  const [name, setName] = useState('stranger');  

  useEffect(() => {
    if (State) {
      setTimeout(() => {
        setShow(true);
      }, 100);
    } else {
      setShow(false);
    }
  }, [State]);

  const btnClick = () => {
    if (!edit) {
      // Simpan data ke localStorage saat menyimpan
      localStorage.setItem('name', name);
      setState(false);
    }
    setEdit(!edit);
  };

  // Mengambil data dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) setName(storedName);
  }, []);

  return (
    <div>
      {
        State && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              zIndex: 3,
            }}
          >
            <div
              className={`card position-absolute translate-middle p-5 rounded-5 ${show ? 'fade-in' : 'fade-out'}`}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '100vw',
                zIndex: 4,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: show ? 1 : 0,
                transform: show ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.95)',
              }}
            >
              <button
                type="button"
                className="btn-close position-absolute"
                aria-label="Close"
                style={{ top: '20px', right: '20px' }}
                onClick={() => setState(false)}
              ></button>
              
              <div className="p-3 rounded-pill mb-5 align-self-center bg-light">

              <img src={userImage} className='img-fluid ' alt="statistik" style={{width: '5rem',padding: '1rem'}} />
              </div>
              <h3>User Information</h3>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id='name' 
                    value={name} 
                    disabled={edit} 
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </form>
              <button 
                className={`btn ${edit === false ? 'btn-success' : 'btn-warning'} ms-auto`} 
                style={{ width: '5rem' }} 
                onClick={btnClick}
              >
                {edit === false ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default UserStatistik;
