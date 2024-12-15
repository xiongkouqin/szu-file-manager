import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import FileUsageStats from '../FileUsageStats';
const UsageButton = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Usage Details
      </Button>
      <Drawer title="My Usage Details" onClose={onClose} open={open} size='large'>
        <FileUsageStats/>
      </Drawer>
    </>
  );
};
export default UsageButton;