import { Box, styled } from '@mui/material'
import { Sidebar } from './components/sidebar'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.background
}))

export const App = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  )
}
