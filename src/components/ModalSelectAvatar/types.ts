export interface IModalSelectAvatar {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  onChange: (avatar: string) => void;
  currentAvatar?: string;
}
