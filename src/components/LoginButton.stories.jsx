import LoginButton from './LoginButton';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
  decorators: [
    (Story) => <MemoryRouter><Story /></MemoryRouter>
  ],
};

export const Default = () => <LoginButton />;
