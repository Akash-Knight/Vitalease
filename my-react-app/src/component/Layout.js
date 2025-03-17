import React from 'react';
import  Children  from 'react'

function Layout({Children}) {
    return (
        <div className=' main'>

            <div className='d-flex layout'>

                <div className='sidebar'>

                    sidebar

                </div>

                <div className=' content'>

                    <div>

                        header

                    </div>

                    <div className='body'>

                        {Children}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Layout;
