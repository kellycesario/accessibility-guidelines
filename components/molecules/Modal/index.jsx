import styles from './styles.module.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Text from '@atoms/Text';
import Spinner from '@atoms/Spinner';

export default function BasicModal({ handleClose, open, message, isLoading }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          {!isLoading && <Text id="modal-modal-description">{message}</Text>}
          {isLoading && <Spinner />}
        </Box>
      </Modal>
    </div>
  );
}
