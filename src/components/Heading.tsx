import React, {FC} from 'react';

interface HeadingProps {
    fontSize?: number;
    children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ fontSize, children }) => {
    return (
        <h1 style={{ fontSize }}>
            {children}
        </h1>
    );
};

export default Heading;