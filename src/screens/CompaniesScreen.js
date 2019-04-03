import React, { useState } from 'react';
import CompaniesList from 'components/CompaniesList';
import FormCompany from 'components/FormCompany';
import FormEmployee from 'components/FormEmployee';
import CardContent from 'components/CardContent';
import {
  ScrollView, StyleSheet, View, Modal, Text, TouchableHighlight,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Icon as Close } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    padding: 16,
    flexDirection: 'column',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  closeContainer: {
    alignSelf: 'flex-start',
  },
  close: {
    padding: 16,
  },
});

const ModalForm = ({ show, children, onRequestClose }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={show}
  >
    <Close
      name="close"
      onPress={onRequestClose}
      containerStyle={styles.closeContainer}
      iconStyle={styles.close}
    />
    <CardContent>
      {children}
    </CardContent>
  </Modal>
);

const CompaniesScreen = ({ navigation }) => {
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [showPersonForm, setShowPersonForm] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="always"
      >
        <CompaniesList navigation={navigation} />
      </ScrollView>

      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor="#9b59b6" title="Add company" onPress={() => setShowCompanyForm(true)}>
          <Icon name="md-add" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#3498db" title="Add person" onPress={() => setShowPersonForm(true)}>
          <Icon name="md-add" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>

      <ModalForm
        show={showCompanyForm}
        onRequestClose={() => setShowCompanyForm(false)}
      >
        <FormCompany />
      </ModalForm>
      <ModalForm
        show={showPersonForm}
        onRequestClose={() => setShowPersonForm(false)}
      >
        <FormEmployee />
      </ModalForm>
    </View>
  );
};

CompaniesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default CompaniesScreen;
