import React from 'react'


export const VistaCv = ({curriculum}) => {
return (
    <div>
        <h1>{curriculum? curriculum.nombre :"..."}</h1>
    </div>
)
}

export default VistaCv
