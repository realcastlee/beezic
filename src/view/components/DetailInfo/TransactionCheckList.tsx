import React, { useRef } from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import {
  Text, View, FlatList, Animated,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';
import Bee from '../../../assets/bee.png';
import Logo from '../../../assets/Beezic_Logo.png';
import carrotLogo from '../../../assets/Beezic_Logo_carrot.png';

const TitleForm = styled.View`
  flex-direction: row;
  align-self: center;
  
`;

const CheckListWrapper = styled.View`
  flex: 1;
`;

const CarrotImage = styled.Image`
  margin-top: 10px;
`;

const CheckListTitle = styled.Text`
  font-size: 30;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  color: #E56D29;
  font-family: 'Jua-Regular';
`;

const PanelHandleStyle = css`
  height: 5;
  width: 50;
  background-color: #c8c8c8;
  border-radius: 6px;
  align-self: center;
  margin-top: 6;
  opacity: 0.6;
`;

const PanelItem = css`
  border-width: 1px;
  border-color: #666;
  padding: 14px;
  border-radius: 6px;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
  margin-bottom: 20;
`;

const TransactionCheckListView = styled.View`
  flex: 1;
  background-color: #FFEFD5;
  border-radius: 24px;
  border-width: 2px;
  border-color: #d2d2d2;
  padding: 14px;
`;

const Description = styled.Text`
  font-size: 25;
  color: #8c8c8c;
  font-family: 'Jua-Regular';
  margin-left: 15px;
`;

const checkIconStyle = css`
  margin-left: 3px;
  margin-top: 2px;
  color: #D2691E;
`;

const userTransactionList = ({ propHeight }): JSX.Element => {
  const userTransactions = [
    {
      key: '1',
      userImage: Logo,
      userName: 'bee',
      transactionDate: 'Date here',
      amount: 'Amount here',
    },
    {
      key: '2',
      userImage: Bee,
      userName: 'logo',
      transactionDate: 'Date here',
      amount: 'Amount here',
    },
    {
      key: '3',
      userImage: Carrot,
      userName: 'carrot',
      transactionDate: 'Date here',
      amount: 'Amount here',
    },
    {
      key: '4',
      userImage: Bee,
      userName: 'carrot',
      transactionDate: 'Date here',
      amount: 'Amount here',
    },
    {
      key: '5',
      userImage: Carrot,
      userName: 'carrot',
      transactionDate: 'Date here',
      amount: 'Amount here',
    },
  ];

  const draggedValue = new Animated.Value(100);

  const ModalRef = useRef(null);

  return useObserver(() => (
    <CheckListWrapper>
      <SlidingUpPanel
        ref={ModalRef}
        draggableRange={{ top: propHeight, bottom: 90 }}
        animatedValue={draggedValue}
        backdropOpacity={0}
        snappingPoints={[360]}
        height={propHeight}
        friction={0.9}
      >

        <TransactionCheckListView>
          <View style={PanelHandleStyle} />
          <TitleForm>
            <CheckListTitle>Check List</CheckListTitle>
            <CarrotImage source={carrotLogo} />
          </TitleForm>
          <View style={{ height: 500, paddingBottom: 10 }}>
            <FlatList
              data={userTransactions}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <View style={PanelItem}>
                  <FontAwesomeIcon icon={faCheck} style={checkIconStyle} size={20} />
                  <Description>{item.userName}</Description>
                </View>
              )}
            />
          </View>

        </TransactionCheckListView>
      </SlidingUpPanel>
    </CheckListWrapper>
  ));
};

export default userTransactionList;