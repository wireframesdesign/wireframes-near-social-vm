import React, { useCallback, useEffect, useState } from "react";

import { useAccountId } from './../data/account';
import { QrReader } from 'react-qr-reader';

export const QRCodeReader2 = (props) => {
  const accountId = useAccountId(props.networkId);

  const [dataOne, setDataOne] = useState('No result');


  useEffect(() => {
  }, []);




  const {
    data,
    children,
    onClick,
    onCommit,
    onCancel,
    disabled,
    widgetSrc,
    force,
    onResult,
    ...rest
  } = props;

  const [computedData, setComputedData] = useState(null);

  return (
    <>
    <QrReader
      onResult={onResult}
      // onResult={(result, error) => {
      //   if (!!result) {
      //     setData(result?.text);
      //   }

      //   if (!!error) {
      //     console.info(error);
      //   }
      // }}
      // style={{ width: '100%' }}
    />
  </>
  );
};
