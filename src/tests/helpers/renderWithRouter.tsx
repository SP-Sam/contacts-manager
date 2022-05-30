import { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component: ReactNode) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router location={history.location} navigator={history}>
        {component}
      </Router>,
    ),
    history,
  };
};

export { renderWithRouter };
