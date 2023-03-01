import './App.css'
import { useMutation } from '@tanstack/react-query'

function App() {
  const a = useMutation({
    mutationKey: ["test"],
    mutationFn: () => new Promise(r => {
      setTimeout(() => {
        r([1, 2, 3])
      }, 2000)
    }),
    cacheTime: 10000
  })
  console.log(a.data)

  return (
    <div className="App">
      <div
        onClick={() => {
          a.mutate()
        }}
      >Click me</div>
    </div>
  )
}

export default App
