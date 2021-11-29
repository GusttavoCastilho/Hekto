import React from 'react';
import { render, screen } from '@testing-library/react'
import HeadingBar from '.'

describe('<HeadingBar />', () => {
    it('should render a correctly links', () => {
        render(<HeadingBar />)

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
        expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Open Cart/i)).toBeInTheDocument()
    })
})