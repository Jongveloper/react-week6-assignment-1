import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  context('존재하지 않는 URL로 접근시 404페이지를 노출한다', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    ));
    expect(container).toHaveTextContent('404 Not Found');
  });
});
