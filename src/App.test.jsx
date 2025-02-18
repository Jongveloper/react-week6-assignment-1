import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('헤더가 보여집니다.', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    const { container } = renderApp({ path: '/restaurants' });

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
  });

  context('with path /not', () => {
    const { container } = renderApp({ path: '/not' });

    expect(container).toHaveTextContent('404 NotFound');
  });

  context('with path /about', () => {
    const { container } = renderApp({ path: '/about' });

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
