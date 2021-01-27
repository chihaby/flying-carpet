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
  title: 'Welcome to Moroccan Prince',
  description: 'We sell the beautiful handmade Moroccan rugs',
  keywords:
    'handmade rugs, moroccan rugs, berber rugs, beni ourain, beni mrirt',
};

export default Meta;
