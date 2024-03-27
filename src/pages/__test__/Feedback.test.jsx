import { expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Feedback from '../Feedback';

//Tests if heading displays
test('renders the header', () => {
    render(<Feedback />);
    const heading = screen.getByText("Feedback Form");
    expect(heading).toBeInTheDocument();
});

//Tests if an error message is displayed if there is no input the the name field
test('Renders an error if name field is empty', async () => {
    render(<Feedback />);
    // Click on the submit button without entering the name
    const submitButton = screen.getByText("Send Feedback");
    fireEvent.click(submitButton);
    // Wait for the error message to be displayed
    await waitFor(() => {
        const errorMessage = screen.getByText(/name.*empty/i);
        expect(errorMessage).toBeInTheDocument();
    });
});

