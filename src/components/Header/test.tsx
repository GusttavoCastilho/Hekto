import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
    it('should render the menu', () => {
        render(<Header />)

        expect(screen.getByRole('heading', { name: /hekto/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /pages/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    })
})