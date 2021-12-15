import Loader from 'react-loader-spinner';

function Loading({ type, color, height, width }) {
    return <Loader type={type} color={color} height={height} width={width} />;
}

export {
    Loading,
};
