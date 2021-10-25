import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Spinner animation="border" />
        </div>
    )
}

export default Loading;
