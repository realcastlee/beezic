import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const HeaderTopWrapper = styled.TouchableOpacity`
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`;

const HeaderTopBack = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <HeaderTopWrapper
      onPress={() => navigation.goBack()}
    >
      <FontAwesomeIcon
        color="#fc8a3d"
        size={30}
        icon={faChevronLeft}
      />

    </HeaderTopWrapper>
  );
};

export default HeaderTopBack;
