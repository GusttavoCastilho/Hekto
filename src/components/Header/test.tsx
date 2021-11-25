import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
    it('should render a heading text', () => {
        render(<Header />)

        expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument()
    })
})