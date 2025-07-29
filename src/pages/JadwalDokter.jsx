import React from 'react';
import dokterList from '../data/jadwalDokter.json';

const groupByPoli = dokterList.reduce((grouped, dokter) => {
  const key = dokter.poli;
  if (!grouped[key]) {
    grouped[key] = [];
  }
  grouped[key].push(dokter);
  return grouped;
}, {});

function JadwalDokter() {
  const renderJadwalBlock = (title, jadwalArray) => (
    <div className="mb-3">
      {title && <h6 className="fw-bold text-primary">{title}</h6>}
      {jadwalArray.map((jadwal, jIndex) => (
        <div className="row mb-1" key={jIndex}>
          <div className="col-5 fw-semibold">Hari</div>
          <div className="col-7">{jadwal.hari}</div>
          {Object.entries(jadwal).map(([waktu, jam]) => {
            if (waktu === 'hari') return null;
            return (
              <React.Fragment key={waktu}>
                <div className="col-5 fw-semibold text-capitalize">{waktu}</div>
                <div className="col-7">{jam}</div>
              </React.Fragment>
            );
          })}
          {jIndex !== jadwalArray.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1
          className="fw-bold text-white py-3 px-4 rounded text-uppercase"
          style={{
            background: 'linear-gradient(to right, #e91e63, #f06292)',
            display: 'inline-block',
            fontSize: '1.5rem',
            letterSpacing: '1px',
          }}
        >
          Jadwal Dokter RSIA Permata Insani
        </h1>
      </div>

      {Object.entries(groupByPoli).map(([poli, dokters]) => (
        <div key={poli} className="mb-5">
          <h3 className="text-danger border-bottom pb-2 mb-4">Poli {poli}</h3>

          <div className="row pb-4">
            {dokters.map((dokter, index) => (
              <div className="col-12 col-md-6 mb-4" key={index}>
                <div className="card shadow-lg border-0 h-100">
                  <div className="d-flex flex-column flex-sm-row align-items-start">
                    <div className="text-center p-3 flex-shrink-0">
                      <img
                        src={dokter.foto}
                        alt={dokter.nama}
                        className="img-fluid"
                        style={{
                          width: '130px',
                          height: '130px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    <div className="p-3 w-100">
                      <div
                        className="bg-danger text-white px-3 py-1 rounded-pill d-inline-block mb-2"
                        style={{ fontSize: '0.85rem' }}
                      >
                        {dokter.spesialis}
                      </div>
                      <h5 className="fw-bold text-danger mb-3">{dokter.nama}</h5>

                      {dokter.jadwal && renderJadwalBlock(null, dokter.jadwal)}
                      {dokter.jadwal_konsul && renderJadwalBlock('Jadwal Konsultasi', dokter.jadwal_konsul)}
                      {dokter.jadwal_terapi && renderJadwalBlock('Jadwal Terapi', dokter.jadwal_terapi)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JadwalDokter;
