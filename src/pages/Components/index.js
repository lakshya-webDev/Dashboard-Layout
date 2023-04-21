import React from 'react'
import { AppComponent } from '../../appData/appComponent'

const Components = (props) => {
    const { children } = props
    return (
        <AppComponent.AppLayout appHeader={true} appFooter={true} appSidebar={true} >
            {children}
        </AppComponent.AppLayout>
    )
}

export default Components