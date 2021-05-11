import React from 'react'

// usefull for pure Component

const Title = React.memo(({ title }) => {
    console.log('rerender Title')
    console.log(title)
    return (
        <h2>{title}</h2>
    )
})

export default Title;