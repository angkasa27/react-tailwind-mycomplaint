import {
  getAllOperator,
  addOperator,
  editOperator,
  deleteOperator,
} from '../../utils/fetch';

export function getAll(page, setResponse) {
  getAllOperator(page)
    .then((res) => {
      if (res.success) {
        return setResponse({
          success: true,
          message: 'SUKSES',
          data: res.data,
          meta: res.meta,
        });
      } else {
        console.log(res.message);
        return setResponse({ success: false, message: res.message });
      }
    })
    .catch((err) => {
      console.log(err);
      return setResponse({
        success: false,
        message: 'Silahkan Hubungi Developer',
      });
    });
}

export function addNew(data, setLoading) {
  setLoading(true);
  addOperator(data)
    .then((res) => {
      if (res.success) {
        setLoading(false);
      } else {
        console.log(res.message);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}

export function updateOperator(id, data, setLoading) {
  setLoading(true);
  editOperator(id, data)
    .then((res) => {
      if (res.success) {
        setLoading(false);
      } else {
        console.log(res.message);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}

export function deleteOne(id, setLoading) {
  setLoading(true);
  deleteOperator(id)
    .then((res) => {
      if (res.success) {
        setLoading(false);
      } else {
        console.log(res.message);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}
