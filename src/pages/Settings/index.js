import React from 'react'
import { AppComponent } from '../../appData/appComponent'

const Settings = (props) => {
    const { title } = props
    return (
        <AppComponent.AppLayout appHeader={true} appFooter={true} appSidebar={true} >
            <div className={`${title}`}>
                <h1>{title}</h1>
            </div>
        </AppComponent.AppLayout>
    )
}

export default Settings