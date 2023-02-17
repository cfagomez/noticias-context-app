import useNoticias from '../hooks/useNoticias'

const listadoNoticias = () => {

    const {noticias} = useNoticias()

  return (
    <div>listadoNoticias</div>
  )
}

export default listadoNoticias