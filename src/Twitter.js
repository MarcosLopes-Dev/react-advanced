import React, { useEffect,useState, memo } from 'react'

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Twitter ( props ) {

   const { loading } = props
   const [tweet, setTweet] = useState()

    // componentDidMount = () => {
    //     const { posts,loading } = this.props
    //     console.log('componentDidMount', posts)
    //     console.log('componentDidMount:loading', loading)
    // }

    //use effect equivalente ao componentdidmount, pois com o array vazio ele passará apenas uma vez
    useEffect(() => {
        const { posts,loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    },[])

    // componentDidUpdate(prevProps) = () => {
    //     const { loading } = props
    //     if(this.props.loading !== prevProps.loading){
    //     console.log('componentDidMount:loading', loading)
    //     }
    // }

    //componentDidUpdate para qualquer alteração e/ou mudança de estados
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    },[loading]) // toda vez que o loading é alterado, chama o conteudo da função

    // componentWillUnmount = () => {
    //     console.log('ComponentWillUnmount : Fui removido  =(')
    // }

    //componentWillUnmount. todo o useeffect com retorno é um unmount
    useEffect(() => {
        return () =>{
        console.log('ComponentWillUnmount : Fui removido  =(')
        }
    },[])
    
   

    const handleTweet = () => {setTweet('Tweet Atualizado')}
    
    
    console.log('Tweet Atualizado', tweet)
    return (
        <div> 
            <button onClick = {handleTweet}>Re-render</button>
            test 
        </div>
    )
    
}

export default memo(Twitter,areEqual)