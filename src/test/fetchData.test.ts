import { fetchData } from '../apollo/fetchData'; // Adjust the path as per your project structure

test('fetchData function fetches data successfully', async () => {
  const dispatchMock = jest.fn();
  await fetchData()(dispatchMock);
  expect(dispatchMock).toHaveBeenCalledTimes(2); // Assuming fetchDataRequest and fetchDataSuccess dispatch actions are called
});

// Add more test cases as needed
