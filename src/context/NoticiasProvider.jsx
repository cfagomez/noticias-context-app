import { createContext, useEffect, useState } from "react"

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general')

  useEffect(() => {

    const consultarAPI = async () => {

      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`

    }

  })

  const handleChangeCategoria = (e) => {

    setCategoria(e.target.value)

  }

  return (
    <NoticiasContext.Provider value={{categoria, handleChangeCategoria}}>
        {children}
    </NoticiasContext.Provider>
  )
}

export {
    NoticiasProvider
}

export default NoticiasContext