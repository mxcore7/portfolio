import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-[99999] bg-red-50 p-10 overflow-auto font-mono text-red-900">
                    <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-white p-6 rounded shadow-lg border border-red-200">
                        <h2 className="text-xl font-semibold mb-2 text-red-700">Error:</h2>
                        <pre className="whitespace-pre-wrap mb-4 bg-red-100 p-4 rounded">
                            {this.state.error && this.state.error.toString()}
                        </pre>

                        <h2 className="text-xl font-semibold mb-2 text-red-700">Stack Trace:</h2>
                        <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border border-gray-200">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
