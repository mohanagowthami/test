
import '@testing-library/jest-dom'
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor, act, getByTestId, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


import LoginPage from '.'


const server = setupServer(
    rest.post('/login', (req, res, ctx) => {
        return res(
            ctx.delay(100),
            ctx.status(200),
            ctx.body(JSON.stringify({ message: 'successful' })))
    }),
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
afterEach(() => cleanup())



test('allows the user to log in', async () => {

    render(<LoginPage />)



    userEvent.type(
        screen.queryByTestId("email"),
        'mohanaga@gmail.com')
    userEvent.type(
        screen.queryByTestId("password"),
        'mohanagajula579@gmail.com')

    await act(async () => userEvent.click(
        screen.queryByText(/Login/i)))
    expect(await screen.findByTestId("loader")).toBeInTheDocument()

}
)





