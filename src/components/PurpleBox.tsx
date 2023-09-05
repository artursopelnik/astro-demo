import React, { ReactNode } from 'react';

import './PurpleBox.scss';

interface Props {
    children: ReactNode
}


export default function PurpleBox({ children }: Props) {
    return (
        <div className="purple-box">
            {children}
        </div>
    );
}