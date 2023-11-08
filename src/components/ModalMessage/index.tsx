import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {IStore} from '../../models/Store';
import {defaultProps} from '../../store/defaultProps';
import {Dispatch} from 'redux';
import {defaultActions} from '../../store/defaultActions';
import {IActionProps} from '../../models/ActionProps';
import {connect} from 'react-redux';
import {IProps} from './types';
import Button from '../Button';
import styles from './styles';
import defaultStyles from '../../communStyles';

const ModalMessage = (props: IProps) => {
  const {message, setMessage} = props;

  const closeModal = () => {
    setMessage!!({isOpen: false});
  };

  return (
    <Modal animationType="fade" transparent={true} visible={message.isOpen!!}>
      <View style={defaultStyles.containerBackground}>
        <View style={defaultStyles.containerModal}>
          <View style={styles.containerTextModal}>
            {message.title && (
              <Text style={styles.titleModal}>{message.title}</Text>
            )}
            <View style={styles.containerMessages}>
              {message.messages &&
                message.messages.map((message: string, index: number) => (
                  <Text key={index} style={styles.messageModal}>
                    {message}
                  </Text>
                ))}
            </View>
          </View>
          <View style={styles.containerButton}>
            {message.isCancelable && (
              <TouchableOpacity onPress={() => closeModal()}>
                <Text style={styles.cancelButton}>Cancelar</Text>
              </TouchableOpacity>
            )}
            {message.action && (
              <Button
                placeholder="Corfirmar"
                onPress={() => {
                  message.action!!();
                  closeModal();
                }}
              />
            )}
            {!message.action && !message.isCancelable && (
              <Button placeholder="Ok" onPress={() => closeModal()} />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: any): IStore => defaultProps(state);
const mapDispatchToProps = (dispatch: Dispatch): IActionProps =>
  defaultActions(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage);
