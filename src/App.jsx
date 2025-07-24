import {
  FaPhoneAlt,
  FaClipboardList,
  FaUserMd,
  FaEnvelope,
  FaHospitalUser,
  FaBed,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok,
  FaWhatsapp,
  FaFacebook,
  FaInfoCircle,
} from 'react-icons/fa';


const menuItems = [
  {
    title: 'Customer Care',
    icon: <FaPhoneAlt />,
    href: 'https://wa.me/6287881123333'
  },
  {
    title: 'Penanganan Keluhan',
    icon: <FaClipboardList />,
    href: 'https://wa.me/6287881123333'
  },
  {
    title: 'PIC JKN Mobile',
    icon: <FaUserMd />,
    href: 'https://wa.me/6287881123333'
  },
];

const layananItems = [
  {
    title: 'Pendaftaran Pasien BPJS Lewat JKN Mobile',
    icon: <FaEnvelope />,
    href: 'https://wa.me/6287881123333'
  },
  {
    title: 'IGD 24 JAM',
    icon: <FaBed />,
    href: 'https://wa.me/6287773031909'
  },
  {
    title: 'Ambulance',
    icon: <FaBed />,
    href: 'https://wa.me/6287881123333'
  },
  {
    title: 'Informasi',
    icon: <FaInfoCircle />,
    href: 'https://wa.me/6287881123333'
  },
  {
    title: 'Pendaftaran Poliklinik',
    icon: <FaUserMd />,
    href: 'https://wa.me/6287881123333'
  },
];

function App() {
  return (
    <div className="container text-center py-4">
      <img
        src="/logo.png"
        alt="Logo"
        className=" mb-3"
        style={{ width: 96, height: 96 }}
      />
      <h4 className="fw-bold">RSIA PERMATA INSANI</h4>
      <p className="text-muted small">
        🏥 RSIA PERMATA INSAN | Jalan Yos Sudarso Pasar Batang, Brebes 📍
      </p>


      <div className="d-flex justify-content-center gap-3 fs-5 my-3 animate-icons">
        <a href="https://www.instagram.com/rsiapermatainsani/" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
          <FaInstagram />
        </a>
        <a href="https://maps.app.goo.gl/VYXuMGvAcrrJ3xmu5" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
          <FaMapMarkerAlt />
        </a>
        <a href="https://www.tiktok.com/@rsiapibrebes" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
          <FaTiktok />
        </a>
        <a href="https://wa.me/6287881123333" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/permatainsanibrebes" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
          <FaFacebook />
        </a>
      </div>


      <div className="row mt-4">
        <div className="col-12 col-md-8 mx-auto">
          <h6 className="fw-bold mb-3">KELUHAN, KRITIK & SARAN 🗣️</h6>
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="d-flex justify-content-between align-items-center px-3 py-2 rounded-pill mb-3 shadow-sm w-100 btn-rsu">
                <div className="d-flex align-items-center gap-2">
                  {item.icon}
                  <span className="small fw-medium">{item.title}</span>
                </div>
                <span className="fs-5">⋮</span>
              </div>
            </a>
          ))}


          <h6 className="fw-bold mt-4 mb-3">KONTAK LAYANAN 🥰</h6>
          {layananItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="d-flex justify-content-between align-items-center px-3 py-2 rounded-pill mb-3 shadow-sm w-100 btn-rsu">
                <div className="d-flex align-items-center gap-2">
                  {item.icon}
                  <span className="small fw-medium">{item.title}</span>
                </div>
                <span className="fs-5">⋮</span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
