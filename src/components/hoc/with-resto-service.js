import React from 'react';
import RestoServiceContext from '../resto-service-context';


/* Компонент высшего порядка - эту функция, которая будет возвращать функцию, которая как аргумент будет получать компонент, этому компоненту можем передать свойства */
const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService} />
                    } 
                }
            </RestoServiceContext.Consumer>
        )
    };
};

export default WithRestoService;