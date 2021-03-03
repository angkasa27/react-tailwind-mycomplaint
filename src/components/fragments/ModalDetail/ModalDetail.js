import React from 'react';
import ModalBase from '../../elements/ModalBase';
import PropTypes from 'prop-types';
import moment from 'moment';
import image from '../../../assets/640x640.jpg';
export default function ModalDetail({ open, onClose, data, handleAction }) {
  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="w-72 md:w-96">
        <h2 className="txt-h1 text-center mb-2">Detail Laporan</h2>
        {/* <img src={data.detail.image} alt="gambar laporan" /> */}
        <img
          className="h-48 w-full object-cover rounded"
          src={image}
          alt="gambar laporan"
        />
        <h3 className="font-bold mt-2">{data.subject}</h3>
        <span className="text-xs block text-gray-300 mb-2">
          {data.userName + ', ' + moment(data.date).locale('id').format('LL')}
        </span>
        {/* <p>{data.detail.description}</p> */}
        <p className="overflow-y-auto h-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          necessitatibus molestias ullam illum doloribus tempore animi suscipit
          similique natus tempora, voluptas explicabo perferendis vitae beatae
          repellat et! Iste, ullam obcaecati?
        </p>
        <div className="mt-2 flex flex-col md:flex-row-reverse justify-between">
          {data.status === 'submitted' && (
            <button
              onClick={() => handleAction()}
              className="btn-main w-full md:ml-1 mt-2"
            >
              Proses / Tinjau
            </button>
          )}
          <button
            onClick={() => onClose()}
            className="btn-outline w-full md:mr-1 mt-2"
          >
            Tutup
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

ModalDetail.defaultProps = {
  open: false,
  onClose: () => {},
  handleAction: () => {},
  data: {},
};

ModalDetail.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  handleAction: PropTypes.func,
  data: PropTypes.object,
};
