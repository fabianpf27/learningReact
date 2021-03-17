const Mensaje = (params) => {
    console.log(params)
    return <h1 style={{color: params.color}}>
            Hola mundo desde modulos            
           </h1>
}

export default Mensaje