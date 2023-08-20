import { useEthPrice } from '@components/hooks/useEthPrice';
import { Button, Modal } from '@components/ui/common';
import { useEffect, useState } from 'react';

const DEFAULT_ORDER = {
  price: '',
  email: '',
  confirmationEmail: '',
};

const _createFormState = (isDisabled = false, message = '') => ({
  isDisabled,
  message,
});

const createFormState = ({ price, email, confirmationEmail }, agreeTOS) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, 'Price is not valid.');
  } else if (confirmationEmail.length === 0 || email.length === 0) {
    return _createFormState(true);
  } else if (email !== confirmationEmail) {
    return _createFormState(true, 'Email are not matching');
  } else if (!agreeTOS) {
    return _createFormState(
      true,
      'You need to agree with terms of service in order to submit form.'
    );
  }
  return _createFormState();
};

export default function OrderModal({ course, onClose, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const [enablePrice, setEnablePrice] = useState(false);
  const [agreeTOS, setAgreedTOS] = useState(false);

  const { eth } = useEthPrice();

  useEffect(() => {
    if (!!course) {
      setIsOpen(true);
      setOrder({
        ...DEFAULT_ORDER,
        price: eth.costPerItem,
      });
    }
  }, [course]);
  const closeModal = () => {
    setIsOpen(false);
    setOrder(DEFAULT_ORDER);
    setAgreedTOS(false);
    setEnablePrice(false);
    onClose();
  };

  const formState = createFormState(order, agreeTOS);

  return (
    <Modal isOpen={isOpen}>
      <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
        <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
          <div className='sm:flex sm:items-start'>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3
                className='mb-7 text-lg leading-6 font-bold text-gray-900'
                id='modal-title'
              >
                {course?.title}
              </h3>
              <div className='mt-1 relative rounded-md'>
                <div className='mb-1'>
                  <label className='mb-2 font-bold'>Price(eth)</label>
                  <div className='text-xs text-gray-700 flex'>
                    <label className='flex items-center mr-2'>
                      <input
                        type='checkbox'
                        className='form-checkbox'
                        checked={enablePrice}
                        onChange={({ target: { checked } }) => {
                          setOrder((order) => ({
                            ...order,
                            price: checked ? order.price : eth.costPerItem,
                          }));
                          setEnablePrice(checked);
                        }}
                      />
                    </label>
                    <span>
                      Adjust Price - only when the price is not correct
                    </span>
                  </div>
                </div>
                <input
                  disabled={!enablePrice}
                  value={order.price}
                  onChange={({ target: { value } }) => {
                    if (isNaN(value)) return;
                    setOrder((order) => {
                      return {
                        ...order,
                        price: value,
                      };
                    });
                  }}
                  type='text '
                  name='price'
                  id='price'
                  className='disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-sm p-2'
                  placeholder='enter price'
                />
                <p className='text-xs text-gray-700'>
                  Price will be verified at the time of the order. If the price
                  will be lower, order can be declined (+- 2% slipage is
                  allowed)
                </p>
              </div>
              <div className='mt-2 relative rounded-md'>
                <div className='mb-1'>
                  <label className='mb-2 font-bold'>Email</label>
                </div>
                <input
                  onChange={({ target: { value } }) => {
                    setOrder((order) => ({
                      ...order,
                      email: value.trim(),
                    }));
                  }}
                  type='email'
                  name='Email'
                  id='email'
                  className='w-80 focus:ring-indigo-500 shadow-md p-2'
                  placeholder='x@y.com'
                />
                <p className='text-xs text-gray-700 mt-1'>
                  It&apos;s important to fill a correct email, otherwise the
                  order cannot be verified. we are not storing your email
                  anywhere
                </p>
              </div>
              <div className='my-2 relative rounded-md'>
                <div className='mb-1'>
                  <label className='mb-2 font-bold'>Repeat Email</label>
                </div>
                <input
                  onChange={({ target: { value } }) => {
                    setOrder((order) => ({
                      ...order,
                      confirmationEmail: value.trim(),
                    }));
                  }}
                  type='email'
                  name='confirmationEmail'
                  id='confirmationEmail'
                  className='w-80 focus:ring-indigo-500 shadow-md p-2'
                  placeholder='x@y.com'
                />
              </div>
              <div className='text-xs text-gray-700 flex'>
                <label className='flex items-center mr-2'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    checked={agreeTOS}
                    onChange={({ target: { checked } }) => {
                      setAgreedTOS(checked);
                    }}
                  />
                </label>
                <span>
                  I agree Eincode &apos; terms of service &apos; and i agree
                  that my order can be rejected in the case data provided above
                  is not correct.
                </span>
              </div>
              {formState.message && (
                <div className='p-2 my-3 text-yellow-700 bg-yellow-200 rounded-sm'>
                  {formState.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse md:flex-row gap-2'>
          <Button
            disabled={formState.isDisabled}
            callFunction={() => onSubmit(order)}
          >
            Submit
          </Button>
          <Button type='button' variant='red' callFunction={closeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
