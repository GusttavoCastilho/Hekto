import React from 'react';
import { render, screen } from '@testing-library/react'
import Button from '.'

import { FiMail } from 'react-icons/fi'

describe('<Button />', () => {
    it('should render a children button', () => {
        render(<Button>My Button</Button>)

        expect(screen.getByRole('button', { name: /my button/i })).toBeInTheDocument()
    })

    it('should render a icon button without children', () => {
        render(<Button icon={<FiMail data-testid="icon" />} />)

        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
})