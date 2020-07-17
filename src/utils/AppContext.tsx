import React, {useState, useContext as Uc, useEffect} from 'react';

const AppContext = React.createContext<any>(null);

interface ContextProviderProps {
    children?: React.ReactNode,
    defaultContext: object,
}

export const ContextProvider:React.FC<ContextProviderProps> = ({children, defaultContext}) => {
    const [context, setContext] = useState({})
    const localStorageAlias: string = "appConstantes";

    /**
     * Seta o context e salva ele no LocalStorage
     * @param dados Entrada que irá ser salva 
     */
    const setContextCached = (dados: object) => {
        const cache = JSON.parse(localStorage.getItem(localStorageAlias) || "{}");
        localStorage.setItem(localStorageAlias, JSON.stringify({...cache, ...dados}));
        setContextEasy(dados);
    }

    /**
     * Seta o contexto porém já importando os dados anteriores
     * @param dados Entrada que irá ser salva
     */
    const setContextEasy = (dados: object) => {
        setContext({...context, ...dados});
    }

    useEffect(() => {
        //Carrega os dados Iniciais alocados no LocalStorage
        const cache = JSON.parse(localStorage.getItem(localStorageAlias) || "{}");
        setContextEasy({...defaultContext, ...cache});
    }, []) //eslint-disable-line

    return (
        <AppContext.Provider value={[context, setContextEasy, setContextCached]}>
            {children}
        </AppContext.Provider>
    )
}

/**
 * Chama o Context principal da aplicação
 * @returns {[Any, Any]} Um state, setState global, e um setState com cache no localStorage
 */
const useMainContext = (): [any, any, any] => Uc(AppContext);

export default useMainContext;