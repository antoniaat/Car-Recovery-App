import './page-header.scss';

import React from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';

const PageHeader = ({img, title}) => {
  return (
    <div className="page-header">
      <img src={img} alt="logo"></img>
      <h1>{title}</h1>
      <div className="breadcrumbs">
        <Breadcrumbs/>
      </div>
    </div>
  );
};

export default PageHeader;