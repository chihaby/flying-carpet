import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Flying Carpet',
  description: 'Online Store for hand made moroccan rugs',
  keywords: 'online rug store, hand made, moroccan rugs, beni ourain',
};

export default Meta;
