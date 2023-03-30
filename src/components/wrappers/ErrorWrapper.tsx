import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export class ErrorWrapper extends React.Component<IProps> {
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error);
        console.log(errorInfo);
    }

    public render() {
        return this.props.children;
    }
}