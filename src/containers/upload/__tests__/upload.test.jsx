import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

import UploadContainer from '../Upload';

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
            push: jest.fn(),
        };
    },
}));

const RootComponent = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

describe('Testing Upload Post', () => {

    beforeEach(() => {
        render(<UploadContainer />, { wrapper: RootComponent });
    });

    test('upload container render successfully', () => {
        const captionText = screen.getByText('Caption');
        expect(captionText).toBeInTheDocument();
    });

    test('melakukan input title pada formulir', () => {
        userEvent.type(screen.getByTestId('input-title'), "sate");
        expect(screen.getByTestId('input-title')).toHaveValue("sate");
    });

    test('melakukan input caption pada formulir', () => {
        userEvent.type(screen.getByTestId('input-caption'), "sate taichan");
        expect(screen.getByTestId('input-caption')).toHaveValue("sate taichan");
    });

    test("error pada input title", async () => {
        const inputTitle = screen.getByTestId('input-title');
        userEvent.type(inputTitle, "a{backspace}");
        userEvent.tab();
        await waitFor(() => expect(screen.getByTestId("error-title")).toBeInTheDocument
());
    });

    test("error pada input caption", async () => {
        const inputCaption = screen.getByTestId('input-caption');
        userEvent.type(inputCaption, "a{backspace}");
        userEvent.tab();
        await waitFor(() => expect(screen.getByTestId("error-caption")).toBeInTheDocument
());
    });
});
