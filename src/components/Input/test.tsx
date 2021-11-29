import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import Input from '.'

describe('<Input />', () => {
    it('should render correctly', () => {
        render(<Input placeholder="My Placeholder" />)

        expect(screen.getByPlaceholderText(/my placeholder/i)).toBeInTheDocument()
    })

    it('Changes its value when typing', async () => {
        const onInput = jest.fn()
        render(<Input onInput={onInput} />)

        const input = screen.getByRole('textbox')
        const text = 'This is my new text'

        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).toHaveValue(text)
            expect(onInput).toHaveBeenCalledTimes(text.length)
        })
        expect(onInput).toHaveBeenCalledWith(text)
    })
})