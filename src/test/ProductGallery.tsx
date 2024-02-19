import { ProductGallery } from '../paths';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


test('renders loading message', () => {
  const { getByText } = render(<ProductGallery />);
  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeDefined();
});




