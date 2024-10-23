import Card from '../components/Card'
import Form from './Form'

const Home = async () => {
  return (
    <div className='w-full relative'>
      <div className='fixed hidden z-20 bg-red-600 w-1/2 p-3 rounded-lg'>
        <Form />
      </div>
      <Card />
    </div>
  )
}

export default Home